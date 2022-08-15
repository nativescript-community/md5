export function calculateMD5(filePath: string) {
    return (com as any).nativescript.md5.md5.calculateMD5(new java.io.File(filePath));
}
