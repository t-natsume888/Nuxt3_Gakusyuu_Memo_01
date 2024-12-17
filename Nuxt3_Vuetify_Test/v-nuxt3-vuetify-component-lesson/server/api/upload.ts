import { writeFile } from 'fs/promises';

// ファイルを取得
export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event);
    console.log(files);

    // エラー処理
    if(!files || files.length === 0) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ファイル送信エラー',
        });
    }

    // ファイルの保存処理
    for(let i = 0; i < files.length; i++) {
        // form の　name の file と同じなら
        if(files[i].name === 'file') {
            const filename = files[i].filename;

            const data = files[i].data;
            const filePath = `./public/${filename}`;
            await writeFile(filePath, data);
        }
    }

    return {
        message: 'success',
    };
}); 