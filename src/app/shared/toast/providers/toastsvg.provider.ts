import {Injectable, Inject} from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class ToastSVGProvider {



  constructor() { 
  }

  getIcon(icon:string){
    return this[icon];
  }

close =`
   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
  <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
</svg>
  `;


  info =`
<svg version="1.1" class="toast_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
   <g>
      <g id="info">
         <g>
            <path  d="M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8     v4H10z"></path>
            <circle  cx="16" cy="4" r="4"></circle>
         </g>
      </g>
   </g>
</svg>
  `;


    success =`
 <svg version="1.1" class="toast_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
	</g></g>
    </svg>
  `;

      warning =`
<svg version="1.1" class="toast_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.691 301.691" style="enable-background:new 0 0 301.691 301.691;" xml:space="preserve">
<g>
	<polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0  "></polygon>
	<rect x="130.563" y="261.168" width="40.525" height="40.523"></rect>
</g>
    </svg>
  `;


error =`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 30 24" xml:space="preserve">  <image id="image0" 
    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
cwAADsMAAA7DAcdvqGQAAAAHdElNRQfjAxQFGQ6+rD9gAAABUUlEQVQ4y42Uv0rDUBjFT4JDhggZ
OhTsUKGDD+ADKOQROrgIjo6ODg6FPkBHBwdx9gEUHEQsWNGxg1sHC1VaaEEhguUchyRtc2/S+C2B
+53fud+fSwArFKjFFza1gbJQoJBtTiVJ4pgXbLKR1TgAz+EhQICa08i1maGPCWaowHf3AXAgK/il
3ABcAEPDca5DdxPbui2onHeG+1MChta9Ue4N+Em+c8v7Iwa+S8dnAJ/Gcb0QGMbAq3HsJT1ULeAZ
cAGnZ6wmFQYW8BYDM/WNwQYZcGnVi0sCukamCgDaMmy6ziQFHozULgCgZthcLQUeR5kFPepIp8bS
flVZgXmmkuB1togKo7XySOZ22FlJ3/OYndUXy7Y1YvnpM2cUj3XZBd/l5+xdewvDEJDHm0Q+0k7B
U+HJwnOQFrRGnkX+JQcAHix+AlO14m5KQnVeclwk/gNboYETPjdmjAAAACV0RVh0ZGF0ZTpjcmVh
dGUAMjAxOS0wMy0yMFQwNToyNToxNCswMzowMCpCQZQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTkt
MDMtMjBUMDU6MjU6MTQrMDM6MDBbH/koAAAAAElFTkSuQmCC" />
</svg
`;

}



