import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild('dialog')dialog!: ElementRef;
  // isModalOpen : boolean = false;
  // isDarkMode: boolean = false;

  constructor(){

  }

  ngAfterViewInit(): void {
 
  }

  ngOnInit(): void {
    // var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    //   return new bootstrap.Popover(popoverTriggerEl)
    // })
  }

  // downloadCV(){
  //   const filePath = '../../../assets/Resume.pdf';
  //   const link = document.createElement('a');
  //   link.setAttribute('target', '_blank');
  //   link.setAttribute('href', filePath);
  //   link.setAttribute('download', 'Resume.pdf');s
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }
  
  // openModal() {
  //   this.dialog.nativeElement.show();
  //   // this.text.nativeElement.textContent = '';
  // }

  // closeModal() {
  //   this.dialog.nativeElement.close();
  //   // this.text.nativeElement.innerHTML += '"close the dialog" closed the dialog.<br/>';
  // }

  // onCancel(event: any) {
  //   // this.text.nativeElement.innerHTML += 'cancel event happened<br/>';
  // }

  // onClose(event: any) {
  //   // this.text.nativeElement.innerHTML += 'close event happened<br/>';
  // }
  // toggleMode() {
  //   this.isDarkMode = !this.isDarkMode;
  // }


}
