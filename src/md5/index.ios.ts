
declare let FileHash;
export function calculateMD5(filePath: string) {
    return FileHash.md5HashOfFileAtPath(filePath);
}
