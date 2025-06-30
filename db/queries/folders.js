import db from '#db/client';

export const createFolder = async (folderName) => {
  const sql = `
    INSERT INTO folders (name)
    VALUES ($1)
  `;

  await db.query(sql, [folderName]);
};