import React from 'react';
import {Link} from 'react-router-dom'
import './privacy.css'

const Privacy = () => {
  return (
    <div className='privacy-page container'>
      <div className="main-privacy">
        <Link to='/'>Home</Link>
        <h1>PRIVACY POLICY</h1>
        <p>This privacy policy sets out how Melouky uses and protects any information that you give Melouky when you use this website. Melouky is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Melouky may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes</p>
      </div>
      <div className='privacy-info'>
      <h2>Information We Collect Online</h2>
        <p>Melouky.com gathers navigational information during each visitor's use of our Web site. In the process of gathering navigational information, non-personally identifiable information (i.e. domain type, browser version, service provider and IP address) may be collected. The navigational information tells Melouky.com about the use of our Web site by visitors, including the areas of our site that are most visited or the time of a last visit to a page on our site. It also tells us about the technical efficiencies of our Web site and services (i.e. the time it takes a visitor to connect to our Web site or download pages). The navigational information helps us better understand a visitor's experience at Melouky.com and improve upon that experience by recognizing and delivering more of the features, services and products our visitors prefer.</p>
        <p>Melouky.com may ask you to provide personal information when you establish or update a Melouky.com account, sign up for Melouky emails, enter a contest, participate in a survey, shop online, check the status of an order, and/or create or send a wish list.</p>
        <p>Categories of information collected include name, address, email address, recipient's name and email address,order information, telephone number, credit card information and messages or reminders you create.</p>
      <h2>Using Personal Information We Collect Online</h2>
        <p>Melouky.com uses the personal information we collect from you to deliver products that you have ordered, to fulfill requests that you have created, to contact you or the product recipient(s) in the event of order or delivery difficulties, for verification purposes, to respond to your inquiries, and to deliver services and information about our products or Web site, including adding you to the Melouky Email Subscription list when you sign up or make a purchase.</p>
      <h2>Melouky Email Subscriptions</h2>
        <p>Melouky Email Subscriptions allow you to receive exclusive information about special offers, new products and much more. If at any time you would like to stop future delivery of Melouky emails, please follow the removal instructions located at the bottom of each message or unsubscribe by sending us your request to <Link to='/'>www.melouky.com</Link>. Asking to be removed from the Melouky Email Subscription will not prevent you from receiving email communications relating to any online order you place at melouky.com, requests to participate in surveys about our products or other operational email communications.</p>
      <h2>Information We Share With Third Parties</h2>
        <p>We use third parties to help us provide services to you such as fulfilling orders, processing payments, monitoring site activity, conducting surveys, maintaining our database, administering emails, and administering drawings or contests. Third parties also provide aggregate, comparative information on the performance of our site to us and a select group.</p>
        <p>If, after making a purchase at melouky .com, you choose to participate in a survey conducted at a third party provider's website, any personal information that you provide during the survey at the third party provider's website will be subject to that third party provider's privacy policy.</p>
        <p>You should be aware that we may disclose specific information about you if necessary to do so by law or based on our good faith belief that it is necessary to conform or comply with the law or is necessary to protect the users of our Web site or the public.</p>
      <h2>Visitors From Outside The U.S</h2>
        <p>If you are visiting melouky.com from a location outside of the U.S., your orders placed through melouky.com will be accepted and fully processed in and shipped from the U.S. All information you provide will be maintained in our Web servers and/or internal systems located within the U.S., and protected as noted in this privacy policy.</p>
      <h2>Cookies</h2>
        <p>melouky.com uses a browser feature known as a cookie. A cookie is a small data file that is stored by your Web browser on your computer. Cookies are used to help track your clicks and pass information as you go through the pages within melouky.com. This allows melouky.com to make our site more responsive to your needs by delivering a better and more personalized experience to you. melouky.com also uses cookies to keep track of how many items you put into your shopping bag and to remember you when you return to melouky.com.</p>
        <p>We also use cookies and/or a technology known as clear gifs, which are typically stored in emails to help us confirm your receipt of, and response to, our emails and to provide you a more personalized experience. Cookies can allow us to associate navigational information from browsing visits with personal information you provide at our site</p>
        <p>For the exhaustive list of cookies we collect see the List of cookies we collect section.</p>
        <h2>Updating Your Personal Information</h2>
        <p>We prefer to keep your personal information accurate and up-to-date. To do this, we provide you with the opportunity to update or modify your personal information including billing and shipping information by logging into your account.</p>
        <h2>Privacy Of Youth On Our Web Site</h2>
        <p>To ensure compliance with federal law, melouky.com does not knowingly collect or maintain information provided by youth under the age of 18.</p>
        <h2>Links To Other Web Sites And Services</h2>
        <p>For your convenience, our Web site may contain links to other sites. Links that appear on melouky.com should not necessarily be deemed to imply that we endorse or have any affiliation with the linked Web sites. melouky is not responsible for the privacy practices or the content of such Web sites. We encourage you to review the separate privacy policies of each site you visit</p>
        <h2>Updates To Privacy Statement</h2>
        <p>melouky reserves the right to change our Privacy Policies without notice. Please check this page periodically for updates.</p>
        <h2>Questions Or Concerns</h2>
        <p>If you have questions or concerns with respect to our Privacy Policy, please contact us at 619-501-0613 or melouky.com</p>
        <h2>List of cookies we collect</h2>
        <p>The table below lists the cookies we collect and what information they store.</p>
      </div>
      <div className="privacy-down">
        <table border='0' cellPadding='10'>
          <tr>
            <th>COOKIE name</th>
            <th>COOKIE Description</th>
          </tr>
          <tr>
            <th>CART</th>
            <td>The association with your shopping cart.</td>
          </tr>
          <tr>
            <th>CATEGORY_INFOCATEGORY_INFO</th>
            <td>	Stores the category info on the page, that allows to display pages more quickly.</td>
          </tr>
          <tr>
            <th>COMPARE</th>
            <td>The items that you have in the Compare Products list.</td>
          </tr>
          <tr>
            <th>CURRENCY</th>
            <td>Your preferred currency</td>
          </tr>
          <tr>
            <th>CUSTOMER</th>
            <td>An encrypted version of your customer id with the store.</td>
          </tr>
          <tr>
            <th>CUSTOMER_AUTH</th>
            <td>An indicator if you are currently logged into the store.</td>
          </tr>
          <tr>
            <th>CUSTOMER_INFO</th>
            <td>An encrypted version of the customer group you belong to.</td>
          </tr>
          <tr>
            <th>CUSTOMER_SEGMENT_IDS</th>
            <td>Stores the Customer Segment ID</td>
          </tr>
          <tr>
            <th>EXTERNAL_NO_CACHE</th>
            <td>A flag, which indicates whether caching is disabled or not.</td>
          </tr>
          <tr>
            <th>FRONTEND</th>
            <td>	You sesssion ID on the server.</td>
          </tr>
          <tr>
            <th>GUEST-VIEW</th>
            <td>Allows guests to edit their orders.</td>
          </tr>
          <tr>
            <th>LAST_CATEGORY</th>
            <td>The last category you visited.</td>
          </tr>
          <tr>
            <th>LAST_PRODUCT</th>
            <td>The most recent product you have viewed.</td>
          </tr>
          <tr>
            <th>NEWMESSAGE</th>
            <td>Indicates whether a new message has been received.</td>
          </tr>
          <tr>
            <th>NO_CACHE</th>
            <td>Indicates whether it is allowed to use cache.</td>
          </tr>
          <tr>
            <th>PERSISTENT_SHOPPING_CART</th>
            <td>A link to information about your cart and viewing history if you have asked the site.</td>
          </tr>
          <tr>
            <th>POLL</th>
            <td>The ID of any polls you have recently voted in.</td>
          </tr>
          <tr>
            <th>POLLN</th>
            <td>Information on what polls you have voted on.</td>
          </tr>
          <tr>
            <th>RECENTLYCOMPARED</th>
            <td>The items that you have recently compared.</td>
          </tr>
          <tr>
            <th>STF</th>
            <td>Information on products you have emailed to friends.</td>
          </tr>
          <tr>
            <th>STORE</th>
            <td>The store view or language you have selected.</td>
          </tr>
          <tr>
            <th>USER_ALLOWED_SAVE_COOKIE</th>
            <td>Indicates whether a customer allowed to use cookies.</td>
          </tr>
          <tr>
            <th>VIEWED_PRODUCT_IDS</th>
            <td>The products that you have recently viewed.</td>
          </tr>
          <tr>
            <th>WISHLIST</th>
            <td>An encrypted list of products added to your Wishlist</td>
          </tr>
          <tr>
            <th>WISHLIST_CNT</th>
            <td>The number of items in your Wishlist.</td>
          </tr>
          <tr>
            <th>GOOGLE ANALYTICS</th>
            <td>Stores non-pernsonal information on user iinteractions with the website.</td>
          </tr>

        </table>
      </div>
    </div>
  );
}

export default Privacy;
