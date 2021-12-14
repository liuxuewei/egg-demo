'use strict';

const { createCanvas, loadImage } = require('canvas');
const CanvasText = require('canvas-text-node').default;

class Canvas {
  /**
   * 实例化一个 node Canvas 对象
   * @param {number} [width=200] 画布宽度
   * @param {number} [height=200] 画布高度
   * @param {"image/png" | "image/jpeg" | "application/pdf"} [mimeType='image/png'] 格式类型
   * @param {number} pixelRatio 像素比
   * @memberof Canvas
   */
  constructor(width = 200, height = 200, mimeType = 'image/png', pixelRatio = 1) {
    const canvasType = mimeType === 'application/pdf' ? 'pdf' : undefined;
    this.pixelRatio = pixelRatio;
    this.canvas = createCanvas(width * this.pixelRatio, height * this.pixelRatio, canvasType);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.quality = 'best';
    this.mimeType = mimeType;
  }

  /**
   * 绘制一段文本
   *
   * @param {object} textConfig -
   * @param {string} textConfig.text 文案
   * @param {number} textConfig.maxWidth 最大宽度
   * @param {string} textConfig.fontFamily 字体名
   * @param {number} textConfig.fontSize 字号
   * @param {number} textConfig.lineHeight 行高
   * @param {string} textConfig.color 颜色
   * @param {"center" | "left" | "right"} textConfig.textAlign 对齐方式
   * @param {number} textConfig.x 横坐标
   * @param {number} textConfig.y 纵坐标
   */
  async drawText(textConfig) {
    const canvasText = new CanvasText(this.ctx, {
      ...textConfig,
      fontFamily: textConfig.fontFamily || 'Alibaba-PuHuiTi-Regular',
      fontSize: (textConfig.fontSize || 14) * this.pixelRatio,
      lineHeight: (textConfig.lineHeight || 18) * this.pixelRatio,
    });
    canvasText.fillParagraph(
      textConfig.text || '',
      textConfig.maxWidth * this.pixelRatio || this.canvas.width,
      (textConfig.x || 0) * this.pixelRatio,
      (textConfig.y || 0) * this.pixelRatio
    );

    // for debug
    // this.ctx.fillRect(
    //   (textConfig.x || 0) * this.pixelRatio,
    //   (textConfig.y || 0) * this.pixelRatio,
    //   textConfig.maxWidth * this.pixelRatio,
    //   (textConfig.lineHeight || 18) * this.pixelRatio
    // );
  }

  /**
   * 绘制一张图片
   *
   * @param {object} imageConfig -
   * @param {string} imageConfig.url 图片链接
   * @param {number} imageConfig.width 图片宽度
   * @param {number} imageConfig.height 图片高度
   * @param {number} imageConfig.x 横坐标
   * @param {number} imageConfig.y 纵坐标
   */
  async drawImage(imageConfig) {
    const img = await loadImage(imageConfig.url);
    this.ctx.drawImage(
      img,
      (imageConfig.x || 0) * this.pixelRatio,
      (imageConfig.y || 0) * this.pixelRatio,
      (imageConfig.width || img.width) * this.pixelRatio,
      (imageConfig.height || img.height) * this.pixelRatio
    );
  }

  /**
   * 绘制背景色
   *
   * @param {string} color 背景色
   */
  async drawBackground(color = 'white') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * 输出 Buffer
   *
   * @return {Buffer} 最终输出
   * @memberof Canvas
   */
  output() {
    const optionsMap = {
      'image/png': {},
      'image/jpeg': {
        quality: 1,
        progressive: true,
      },
      'application/pdf': {},
    };
    return this.canvas.toBuffer(this.mimeType, optionsMap[this.mineType]);
  }
}

module.exports = Canvas;
