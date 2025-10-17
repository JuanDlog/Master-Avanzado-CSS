document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
            document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.6374909959386!2d-13.86633748179012!3d28.5054238536894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47c62d5a78df77%3A0x3cb651bf8f485ef2!2sC.%20Extremadura%2C%2031%2C%2035600%20Puerto%20del%20Rosario%2C%20Las%20Palmas!5e0!3m2!1ses-419!2ses!4v1760649832036!5m2!1ses-419!2ses"></iframe>
    `;
    }, 500);


});