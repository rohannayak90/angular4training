import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  // Using Renderer
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }
  
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    
    this.myTextColor = this.defaultColor;
  }
  
  // Using HostListener
  @HostListener('mouseenter') onMouseEnter(event:Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'pink');
    
    this.myTextColor = this.defaultColor;
  }
  
  @HostListener('mouseleave') onMouseLeave(event:Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    
    this.myTextColor = this.hoverColor;
  }
  
  // Using HostBinding
  @Input() defaultColor:string = 'green';
  @Input() hoverColor:string = 'red';
  
  @HostBinding('style.color') myTextColor:string;

}
