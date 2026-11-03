import fs from "fs";
import { env } from "process";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function prompt(query: string, prefill: string) {
    return new Promise<string>((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer || prefill);
        });
        if (prefill) {
            rl.write(prefill);
        }
    });
}

async function main() {
    const remoteResumePath = env.ONEDRIVE + "\\Personal\\Canada\\Resume\\Sunghoon_Park_Resume.pdf";
    if (!fs.existsSync(remoteResumePath)) {
        console.error(`[REMOTE] Resume not found at path: ${remoteResumePath}`);
        process.exit(1);
    }
    const remoteStat = fs.statSync(remoteResumePath);
    const remoteLastModified = remoteStat.mtime;

    const localResumePath = "public/Sunghoon_Park_Resume.pdf";
    const resumeExists = fs.existsSync(localResumePath);
    if (resumeExists) {
        const localStat = fs.statSync(localResumePath);
        const localLastModified = localStat.mtime;
        console.log(`[LOCAL] Resume last modified: ${localLastModified.toLocaleDateString()}`);
        console.log(`[REMOTE] Resume last modified: ${remoteLastModified.toLocaleDateString()}`);
        if (localLastModified < remoteLastModified) {
            console.warn(`[WARNING] Local resume is older than remote resume.`);
            const answer = await prompt("Update local resume? (y/n): ", "y");
            if (answer.toLowerCase() === "y") {
                fs.copyFileSync(remoteResumePath, localResumePath);
                console.log("Local resume updated.");
            }
        } else {
            console.info(`Local resume is up to date.`);
        }
    } else {
        // Local resume does not exist, copy from remote
        console.log(`[REMOTE] Resume last modified: ${remoteLastModified.toLocaleDateString()}`);
        const answer = await prompt("Local resume not found. Copy from remote? (y/n): ", "y");
        if (answer.toLowerCase() === "y") {
            fs.copyFileSync(remoteResumePath, localResumePath);
            console.log("Local resume created from remote.");
        }
    }
}

main();

process.exit(0);