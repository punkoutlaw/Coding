// By default do not allow form submission.
var allow_submit = false

function captcha_filled () {
    /*
     * This is called when Google get's the recaptcha response and approves it.
     * Setting allow_submit = true will let the form POST as normal.
     * */

    allow_submit = true
}

function captcha_expired () {
    /*
     * This is called when Google determines too much time has passed and expires the approval.
     * Setting allow_submit = false will prevent the form from being submitted.
     * */

    allow_submit = false
}

let divAppended = false;

function toggleText1() {
    var divContainer1 = document.getElementById("div-container1");

    // Toggle between the original text and the appended text
    if (divAppended) {
        divContainer1.innerHTML = "Web design is not a \"One-size-fits-all\" affair. We'll work with you to achieve your vision.";
    } else {
        divContainer1.innerHTML = "In web design, a one-size-fits-all approach doesn't cut it. We work closely with clients, tailoring strategies to capture their unique brand essence. Our commitment is to exceed expectations, creating authentic websites with open communication and client involvement, delivering a digital experience that resonates. With Razzo Designs, web design is not just a service but a personalized, dynamic art form.";
    }

    // Toggle the flag to indicate the current state
    divAppended = !divAppended;
}

function toggleText2() {
    var divContainer2 = document.getElementById("div-container2");

    // Toggle between the original text and the appended text
    if (divAppended) {
        divContainer2.innerHTML = "Whether you're looking for a custom design or something simple, our pricing is flexible and won't break the bank.";
    } else {
        divContainer2.innerHTML = "Whether you're seeking a custom design or a more straightforward solution, our flexible pricing ensures affordability without compromising quality. From unique projects to simpler designs, we cater to your specific needs without breaking the bank. Your budget is considered, making quality web design accessible for startups, small businesses, and larger enterprises alike.";
    }

    // Toggle the flag to indicate the current state
    divAppended = !divAppended;
}

function toggleText3() {
    var divContainer3 = document.getElementById("div-container3");

    // Toggle between the original text and the appended text
    if (divAppended) {
        divContainer3.innerHTML = "We also specialize in responsive design, ensuring your site looks great on all devices.";
    } else {
        divContainer3.innerHTML = "Apart from our fundamental services, we specialize in responsive design to ensure your website maintains a seamless and visually appealing experience across various devices, from smartphones to desktops. This commitment reflects our dedication to adapting and enhancing your online presence for the ever-evolving digital landscape.";
    }

    // Toggle the flag to indicate the current state
    divAppended = !divAppended;
}

function toggleText4() {
    var divContainer4 = document.getElementById("div-container4");

    // Toggle between the original text and the appended text
    if (divAppended) {
        divContainer4.innerHTML = "After deployment, we offer free consulting for added piece of mind.";
    } else {
        divContainer4.innerHTML = "Post-deployment, we go the extra mile by offering free consulting, providing ongoing support, guidance, and valuable insights to ensure your project's continued success. Our commitment marks the beginning of a lasting partnership focused on your satisfaction and the enduring quality of our services.";
    }

    // Toggle the flag to indicate the current state
    divAppended = !divAppended;
}