import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  console.log('getBase64')
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@Component({
  selector: 'cleric-eshop-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileList: NzUploadFile[] = [];

  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile) => {
    console.log('file.url', file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.response.url || file.preview;
    this.previewVisible = true;
  };

  handleChange(info: { file: NzUploadFile }): void {
    if (info.file.status === 'error') {
      // this.notify.error('上傳圖片異常，請重試');
    }
    if (info.file.status === 'done') {
      // getBase64(info.file.originFileObj, (img: any) => {
      //   // this.room.showPhoto = img;
      // });
      console.log(info.file.response);
      var photo = info.file.response.url;
      // this.uploadImages.push(photo);
      // alert(this.room.photo);
      // this.notify.success('上傳圖片完成');
    }
  }
}
