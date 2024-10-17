console.log('IT’S ALIVE!');

const ARE_WE_HOME = document.documentElement.classList.contains('home');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// let navLinks = $$("nav a");

// let currentLink = navLinks.find(
//     (a) => a.host === location.host && a.pathname === location.pathname,
//   );

//   if (currentLink) {
//     // or if (currentLink !== undefined)
//     currentLink.classList.add('current');
//   }

// create a navbar
let pages = [
    { url: '', title: 'Home' },
    { url: 'projects/', title: 'Projects' },
    { url: 'contact/', title: 'Contact' },
    { url: 'resume/', title: 'Resumes' },
    { url: 'https://github.com/ntd002', title: 'Github Profile' },
  ];

let nav = document.createElement('nav');
document.body.prepend(nav);


for (let p of pages) {
    let url = p.url;
    let title = p.title;
    if (!ARE_WE_HOME && !url.startsWith('http')) 
    {
        url = '../' + url;
    }
    //create a link
    let a = document.createElement('a');

    a.href = url;
    a.textContent = title;
    nav.append(a);

    //current tab is current style
    if (a.host === location.host && a.pathname === location.pathname) 
    {
        a.classList.add('current');
    }
    //making github profile target=blank
    if (url === 'https://github.com/ntd002')
    {
        a.target = "_blank"
    }

}

//light/dark mode selector
document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <label class="color-scheme">
          Theme:
          <select>
                <option value="light dark">--Automatic--</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
          </select>
      </label>`,
  );

let select = $$("label select");

select.addEventListener('input', function (event) {
    console.log('color scheme changed to', event.target.value);
    document.documentElement.style.setProperty('color-scheme', event.target.value);
});