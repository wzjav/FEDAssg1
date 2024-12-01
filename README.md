# FEDAssg1
One or two paragraphs providing an overview of your project. Tell us about your project.


## Design Process
The design of the website is of a store that is selling milk. The user is able to click into product and view description of the milk product, and if they like it, they can add it to cart and also choose the quantity that they want. It will then direct them to the cart page for them to check out. The website is also responsive to different screen sizes so users can view on their mobile phone, ipad or laptop. There is also a filter in the menu page the filter between the type of milks the user likes. For my website in particular, the filters are of different countries the milk is from. I have three different countries so the user can choose the country that they prefer their milk from and it will display the milks that are from there.

## User Stories:
As a user type, I want to be able to see what the website is about, so see the menu page of the different types of products the website has to offer, the about us to see what the company is about and the story of the company, a contact us page just in case I have any questions about certain products, I have somewhere where I can contact them and lastly, the ability to click into a product that I like, add it to cart and checkout to buy it.


## Features:
### Feature 1: 
- A Shop Now Button where if you click on it, it will direct the user over to the menu page.
### Feature 2:
- A redeem now button where if you click it, it will display a message that tells the user that they are redeeming a voucher.
### Feature 3
- A filter in the menu page which filters out the different countries the product is from, so the user doesn't have to look through all the different products and check to see if it is from the country of their liking.
### Feature 4: 
- Add to cart function. When you are in your product page, there is an option to choose the quantity that you want, after which you can click on the add to cart button which will display a message to tell you how many items you have added to cart, and then direct you to your cart page to checkout. In your cart page, it will display the product that you have added to cart, the quantity that you chose and also the total price of the items in the cart.
### Feature 5:
- Checkout Button. The website has a checkout button where when you click it, it will display a message which says that you have successfully checked out, and after which the items that were in the cart before will now be removed from the cart, and your cart will become empty.
### Feature 6:
- At the contact us page, if the user does not fill in one of the sections of the contact us form, it will not allow the user to submit and will display a message to tell the user to fill up all the fields and once all the fields are filled up, then it will allow the user to submit and the form will reset as it has been submitted.


## Features Left to Implement:
- Adding more product pages to allow the user to click into every single one of the product, view the description and add it to cart if it is to their liking.
- For the product Packet Size and Multi-Flavour, I would like to be able to click into the product and select the flavour that the user would like, together with the bottle size amount and quantity and for different bottle size amounts and maybe flavours, the price amount would also be different.


## Technologies Used:
### HTML
- This project uses HTML to define to basic layout and organisation of text, images, links, and other elements that would be displayed to users.
### CSS
- This project uses CSS to control the visual presentation and layout of HTML elements, allowing to style the web pages by colors, fonts, spacing, positioning, responsiveness, and overall design across different devices and screen sizes to make it look good.
### Javascript
- This project uses javascripts to perform several key functions such as making all the different buttons clickable, doing form validation for the contact us page, content management, data manipulation, local storage interaction.

# Testing:
## Contact form:
- Go to the "Contact Us" page
- Try to submit the empty form and verify that an error message "Please fill in all fields" appears.
- Try to submit the form with only part of the inputs and verify that an error message "Please fill in all fields" appears.
- Try to submit the form with all inputs and verify that a message "Message Submitted" appears, and the form resets.
## Menu page:
1. Go to the "Menu" page
2. Click on the different filters available and ensure that the product displayed changes successfully.
3. Click on the "Japan" or "All" filter, and then click on the product "Strawberry" and ensure that it brings you to the product page of the strawberry milk, displaying the product description, quantity amount, add to cart funcction and a related products section to allow you to see the other products offered.
4. On the "Strawberry" product page, try to key in the quantity that you want and click the "Add to cart" button and ensure that a message appears and after clicking "Ok", it directs you to the "Cart" page which shows the item that you added to cart, the quantity amount and the total price of the cart and item.
5. Now, go to a different page of the website, and then go back to the cart page by clicking the cart icon on the top right of the website, verify that the product you added to cart previously is still in the cart, with the correct quantity amount as you have not checked out previously.
6. Now click the "Checkout" button and verify that a success message is displayed, and after clicking "Ok" to the message, the item from the cart is removed and the cart becomes empty again.
7. Test this by clicking on the "Checkout" button again and verify that a message "Your cart is empty! Add something to checkout!" is displayed.
8. Repeat steps 3 and 4 again and this time, unselect the check box on the left, and click on the "Check Out" button and verify that a message "No item selected! Please select at least one item to check out!" message is displayed.
9. Now, click on the "X" icon on the right of the item and click on the "Check Out" button and verify that a message "Your cart is empty! Add something to check out!" is displayed.
10. Repeat steps 3 and 4 again but this time, go back to the menu page and click on the Strawberry product again and choose your quantity amount and add to cart. Verify that the quantiity you added to cart the second time adds up with the first time and the cart displays the total amount of items added to cart together with the total price.

## Home Page:
1. Go to Home Page
2. ⁠Hover over the "Shop Now" button and verify that that button background color changes to black and text color change to white
3. ⁠Now click on the "Shop Now" button and verify that it navigates you to the menu page which shows all the products available 
4. ⁠Now go back to your home page and scroll down to the second section where you can redeem the voucher
5. ⁠Hover over the image to ensure that a pop up with a message "Enjoy your 20% off voucher " appears
6. ⁠Hover over the "Redeem Now" button and verify that the button background color changes from black to white, with the text color changing from white to black
7. ⁠Click the "Redeem Now" button and verify that a message appears
8. ⁠Now, on the right, there is the same text "Enjoy 20% off voucher" with a redeem now button
9. ⁠Hover over the button and verify that the background color of the button changes from black to white, with text color changing from white to black
10. ⁠Now click on the "Redeem Now" button and verify that a message appears.

## Responsiveness:
1. The website is responsive to different screen sizes.
2. ⁠You can test that by right clicking your mouse and click on "Inspect" all the way at the bottom, now you can move the screen left and right according to your liking or click on the mobile phone icon on the top left of the inspect element screen to see the mobile view. On the top of the screen where you see dimensions, you can also choose the type of mobile device you want. From there, you can see how the website changes according to the different screen sizes.

# Problems Encountered:
Most of my problems was with my Javascript code. For example, one of my problems I have encountered while doing my website was that my add to cart button in the product page was not working properly. At first, when I clicked the button, the message is displayed and I am directed to the cart page, but my product is not displayed on the cart page. This was because I did not write my Javascript code properly and after some googling and trying to look for a solution on how to do it everywhere, I managed to do it. Another problem was also related, where by my product was not saved in the cart when I moved to different pages. After lots of googling trying to look for a solution on how to do it properly, this was also fixed in the Javascript code.

# Credits
## Content


## Media
- The pictures for the home page was from [First Section](https://www.vecteezy.com/vector-art/21296423-3d-milk-ad-template-for-product-display-milk-pack-mock-up-set-in-a-miniature-farm-island-on-sunshine-sky-background) and [Second Section](https://www.freepik.com/photos/milk-packaging-design/4)
- The pictures for the menu page was from [Strawberry](https://www.kaiserfoods.com.sg/product/yotsuba-milk-strawberry-200ml/), [Original](https://www.kaiserfoods.com.sg/product/hokkaido-yotsuba-fresh-milk-1l/), [Platinum](https://www.meiji.com/global/food/milk/meiji-oishii-gyunyu.html), [Original](https://japan-food.jetro.go.jp/en/feature/detail/664.html), [Vanilla](https://online.citysuper.com.hk/products/hokkaido-specially-select-3-6-milk-18000017), [Packet Size](https://tastell.en.made-in-china.com/product/cmDUWJioZwVO/China-Milk-Beverage-with-Real-Puree-on-Sale.html), [Multi-Flavour](https://shopee.com.my/Susu-Meiji-Thailand-450ml-i.304205301.25131449618), [Coffee](https://cpfreshmartshop.com/shop/%E0%B9%80%E0%B8%A1%E0%B8%88%E0%B8%B4-%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%94%E0%B8%A3%E0%B8%AA%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F-200%E0%B8%8B%E0%B8%B5%E0%B8%8B%E0%B9%8A),[Vanilla](https://www.makro.pro/en/p/894302-7204377821379)
- The pictures for the the About Us page was generated using AI from [Gemini](https://gemini.google.com/app/2306cc34d98e82f8)

Acknowledgements
I received inspiration for this project from X
