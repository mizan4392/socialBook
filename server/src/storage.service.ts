import { Injectable } from '@nestjs/common';
import { ReadStream } from 'typeorm/platform/PlatformTools';

@Injectable()
export class LocalStorageService {
  assetFolder = process.env.LOCAL_ASSET_DIR;

  copyFile(fromPath: string, toPath: string): Promise<boolean> {
    // TODO Fix it
    // eslint-disable-next-line
    const fs = require('file-system');

    fromPath = this.assetFolder + '/' + fromPath;
    toPath = this.assetFolder + '/' + toPath;

    return new Promise((resolve, reject) => {
      try {
        fs.existsSync(fromPath);
      } catch (err) {
        reject(false);
      }
      fs.copyFileSync(fromPath, toPath);
      resolve(true);
    });
  }

  deleteFile(filePath: string): Promise<boolean> {
    // TODO Fix it
    // eslint-disable-next-line
    const fs = require('fs');

    fs.unlinkSync(this.assetFolder + '/' + filePath);
    return Promise.resolve(true);
  }

  getFile(filePath: string): Promise<ReadStream> {
    // TODO Fix it
    // eslint-disable-next-line
    const fs = require('file-system');

    try {
      if (fs.existsSync(this.assetFolder + '/' + filePath)) {
        return fs.createReadStream(this.assetFolder + '/' + filePath);
      }
    } catch (err) {
      throw Error('no file');
    }
    return null;
  }

  // eslint-disable-next-line
  async putFile(file, path: string): Promise<any> {
    // TODO Fix it
    // eslint-disable-next-line
    const fs = require('file-system');
    const parts = path.split('/');
    const directory =
      this.assetFolder + '/' + parts.slice(0, parts.length - 1).join('/');
    const exists = await fs.existsSync(directory);
    if (!exists) {
      await fs.mkdirSync(directory);
    }

    fs.writeFileSync(this.assetFolder + '/' + path, file.buffer);
    return path;
  }
}
