'use strict';

const Service = require('egg').Service;
const Canvas = require('../common/canvas');

class DrawService extends Service {
  async parallel(data) {
    const { meta, processors } = data;
    const canvasInstance = new Canvas(meta.width, meta.height, meta.mineType, meta.pixelRatio);
    if (meta.bgColor) {
      await canvasInstance.drawBackground(meta.bgColor);
    }
    for (let i = 0; i < processors.length; i++) {
      const processor = processors[i];
      switch (processor.type) {
        case 'TEXT': {
          // 避免拿到不存在的字体配置
          // if (!processor.fontFamily || !this.app.loadedFonts.includes(processor.fontFamily)) {
          //   this.app.logger.warn('unknown fontFamily:', processor.fontFamily, processor);
          //   processor.fontFamily = 'Alibaba-PuHuiTi-Regular';
          // }
          await canvasInstance.drawText(processor);
          break;
        }
        case 'IMAGE': {
          await canvasInstance.drawImage(processor);
          break;
        }
        default: {
          this.ctx.logger.warn('unknown processor:', processor);
          break;
        }
      }
    }
    return canvasInstance.output();
  }
}

module.exports = DrawService;
