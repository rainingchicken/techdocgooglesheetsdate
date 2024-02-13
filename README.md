# Technical Document Google Sheets Date
https://rainingchicken.github.io/techdocgooglesheetsdate/

### Purpose
This is one of the project requirement for the freecodecamp.org Responsive Web Design Certification. It is a technical document page about different ways dates can be added to a cell in Google Sheets. Also it was deceptively simple, I like the clean look of the web page.

![samplewebsitetechdocgooglesheetsdate](https://github.com/rainingchicken/techdocgooglesheetsdate/blob/main/images/techdocpagesample.png) (updated 2/12/2024)

### Features
- Responsive tables of content menu that changes depending on screen size
- Real time tutorial


### Progress
1. For some reason, it was hard to make the nav and main display side by side. It's all because of the fixed display of nav. So, I added margins to make up for the overlap of the elements.
2. I had an idea to input the current date to make the tutorial more engaging and it turned out really good. It was tedius but it makes the page more alive(?). I wanted to practice coding and creating arrays but I had to give up. The ordinal numbers in paticular was too much work because there was too many exceptions such as "first", "second", "third", "eleventh", "twelfth", "twentieth", and "thirtieth." I would have need to make an array from 1-9, array of 10,20,30, array of 11-13, different endings of "th" and "teenth", Since the dates stop at 31, it was easier to write out 31 ordinal numbers. All of this for a single use. However, I think it was worth it in making the page cooler. 
3. I collapsed the tables of content into a menu icon that shows and hide the menu since it takes up half the page when the screen is halved. The icon was made using div and css. It would have been faster to put an image however I wanted to use the skills I learned from creating city skylines with css. 
4. Decorating the page was simple as I used the Google Sheets color scheme so I did not have to think as much. While the page is formal, the colors make it not overwhelming
5. The icon which is not a button was simpler than I thought. I wrote a js function for the onclick attribute for it style.display="block" and ...="none." I ran into a problem however. When my screen is small, the tables of content change into a menu. If I click on the icon to hide the tables of content, when I go fullscreen again, the tables of content was not there and there was no way for me to display it again because the icon does not exist in fullscreen. I could not figure out a way to override it. I tried hard coding what happens when the screen width is more than 1000px, however, it seems that when I clicked to hide the tables of content while I was in a smaller screen, it erased the display function(?). So I used "!important" on nav and it worked. Apprently it should be last resort. I think it is fine.
6. I was not able to make it so that when you scroll up, the header which contains nav menu work with the show and hide function of menu icon. While the header displays when you scroll u when you want to click to show tables of content, the header jumps to top of page rather than stay on top of screen. So I erased it. To make up for it, I have the scroll to top option which allows you access to the menu icon to click to show tables of content and go to the section you want to visit.
7. Once again, the mobile version did not look right. Thw problems were with the padding in nav and images so I added boxing-size:box-border to make it so that the width of the elements don't get bigger and overflow x. The other problem causing overflow x was the links in the references being too long and didn't wrap properly so I added word-wrap:break-word. I am also reminded that working alone kind of suck because spelling mistakes are hard to watch. I wanted to fix references but accidentally did not capitalize "R" so nothing was applied to the actual Reference section.  
