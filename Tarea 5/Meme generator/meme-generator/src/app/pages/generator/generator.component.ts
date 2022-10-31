import { Component, OnInit } from '@angular/core';
import { toJpeg } from 'html-to-image';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  title = 'meme-generator';
  file: any;
  filename: string = '';
  upper: string ='Hola';
  lower: string ='Mundo';
  color: string ='';
  size: number =16;
  dataUrl: string ='https://www.eluniversalpuebla.com.mx/sites/default/files/2022/09/07/hasbulla-el-universal-puebla-lo-recuperado-recuperado.jpg';
  //@ViewChild('imageElement') imageElement any;


  doOnchange(target:any){
    
    const file = target.files[0]
    this.filename = file.name;

    const reader = new FileReader();

    reader.onload = (e:any)=>{
      console.log('ya se cargo el archivo');
      this.dataUrl = e.target.result;
    
    };

    reader.readAsDataURL(file);
  }
  saveImage(){
    const node: any = document.getElementById('meme');
    toJpeg(node).then((e:any)=>{
      const anchor = document.createElement('a')
      anchor.download = this.filename;
      anchor.href = e;
      anchor.click();
    })
  }

}
