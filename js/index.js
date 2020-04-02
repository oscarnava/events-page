//DONE: Share with twitter & facebook
//DONE: 'login to apply for this event' message
//DONE: Intro message
//DONE: Fetch from API: https://api.mockaroo.com/api/d29f6fc0?count=20&key=d281b5a0
//DONE: Convert dialogs to modal
//TODO: Add "Clear users" button

// *************************************************************************************
// *
// *                                  Events Page
// *
// *       Programmed & designed by Oscar Nava Trujillo (https://oscarnava.me)
// *    This version was created during the Coronavirus outbreak. 24-30 March '2020
// *    To anyone reading this, I sincerely hope you and your loved ones are safe.
// *
// *************************************************************************************

// Data could come from an external source like an API. Hardcoded for this demo, but the function
// fetchData can be modified to fetch from an external source.

const EVENTS = {
  concert: {
    name: 'Concert',
    vip: false,
    img: 'concert.svg'
  },
  art_exposition: {
    name: 'Art exposition',
    vip: false,
    img: 'art_exposition.svg'
  },
  sports: {
    name: 'Sports',
    vip: false,
    img: 'sports.svg'
  },
  festivals: {
    name: 'Festivals',
    vip: false,
    img: 'festivals.svg'
  },
  invite_conference: {
    name: 'Invite-only conference',
    vip: true,
    img: 'invite_conference.svg'
  },
  free_conference: {
    name: 'Free admission conference',
    vip: false,
    img: 'free_conference.svg'
  }
}

const DATA = [{
  "id": 1,
  "type": "festivals",
  "title": "monetize seamless deliverables",
  "starts": "3/1/2020",
  "ends": "3/20/2020",
  "location": "Kafir Yasif",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\nFusce consequat. Nulla nisl. Nunc nisl."
}, {
  "id": 2,
  "type": "invite_conference",
  "title": "integrate bleeding-edge ROI",
  "starts": "3/3/2020",
  "ends": "3/29/2020",
  "location": "Barajalan",
  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "id": 3,
  "type": "concert",
  "title": "orchestrate next-generation convergence",
  "starts": "3/2/2020",
  "ends": "3/18/2020",
  "location": "Cervantes",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
}, {
  "id": 4,
  "type": "festivals",
  "title": "utilize strategic web services",
  "starts": "3/2/2020",
  "ends": "3/30/2020",
  "location": "Xhafzotaj",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "id": 5,
  "type": "free_conference",
  "title": "revolutionize user-centric technologies",
  "starts": "3/3/2020",
  "ends": "3/29/2020",
  "location": "Xiaogang",
  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "id": 6,
  "type": "sports",
  "title": "embrace integrated infrastructures",
  "starts": "3/7/2020",
  "ends": "3/19/2020",
  "location": "Ampelgading",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "id": 7,
  "type": "art_exposition",
  "title": "deliver interactive initiatives",
  "starts": "3/4/2020",
  "ends": "3/20/2020",
  "location": "Kävlinge",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
  "id": 8,
  "type": "concert",
  "title": "syndicate cutting-edge e-markets",
  "starts": "3/5/2020",
  "ends": "3/26/2020",
  "location": "Kladno",
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "id": 9,
  "type": "sports",
  "title": "envisioneer e-business ROI",
  "starts": "3/8/2020",
  "ends": "3/17/2020",
  "location": "Korczew",
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
  "id": 10,
  "type": "festivals",
  "title": "engage e-business convergence",
  "starts": "3/13/2020",
  "ends": "3/27/2020",
  "location": "Kazimierz Dolny",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "id": 11,
  "type": "free_conference",
  "title": "extend wireless users",
  "starts": "3/2/2020",
  "ends": "3/25/2020",
  "location": "Yengimahalla",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl.\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
}, {
  "id": 12,
  "type": "invite_conference",
  "title": "redefine dynamic methodologies",
  "starts": "3/2/2020",
  "ends": "3/27/2020",
  "location": "Debrzno",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
}, {
  "id": 13,
  "type": "free_conference",
  "title": "target scalable markets",
  "starts": "3/9/2020",
  "ends": "3/17/2020",
  "location": "Jiangcun",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
}, {
  "id": 14,
  "type": "free_conference",
  "title": "leverage revolutionary e-commerce",
  "starts": "3/5/2020",
  "ends": "3/29/2020",
  "location": "Waihi",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
}, {
  "id": 15,
  "type": "art_exposition",
  "title": "productize revolutionary e-markets",
  "starts": "3/8/2020",
  "ends": "3/22/2020",
  "location": "Kudamatsu",
  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 16,
  "type": "invite_conference",
  "title": "repurpose global convergence",
  "starts": "3/5/2020",
  "ends": "3/20/2020",
  "location": "Zhaoqing",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
}, {
  "id": 17,
  "type": "sports",
  "title": "unleash cross-platform experiences",
  "starts": "3/14/2020",
  "ends": "3/18/2020",
  "location": "Rochester",
  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "id": 18,
  "type": "free_conference",
  "title": "seize wireless infrastructures",
  "starts": "3/9/2020",
  "ends": "3/17/2020",
  "location": "Shimen",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\nIn congue. Etiam justo. Etiam pretium iaculis justo.\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
  "id": 19,
  "type": "free_conference",
  "title": "monetize wireless mindshare",
  "starts": "3/7/2020",
  "ends": "3/25/2020",
  "location": "Las Vegas",
  "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
}, {
  "id": 20,
  "type": "invite_conference",
  "title": "engage virtual infrastructures",
  "starts": "3/14/2020",
  "ends": "3/21/2020",
  "location": "Marignane",
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}]

// Some useful shortcuts and constants.
const APP_PREFIX = 'evt-'
const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' }
const IMAGE_PATH = 'img'
const DOCUMENT_URL = encodeURI(document.URL).trim()

const MSG_ALREADY_APPLIED = 'You have already applied for this event.'
const MSG_LOG_IN_TO_APPLY = 'Please log in to be able to apply for this event.'

// Content for dialogs.

const LOG_DLG_HTML = `
  <form action="">
    <p>Please provide a valid email and password:</p>
    <label for="emailInput">email:</label>
    <input type="email" id="emailInput" required value="contact@oscarnava.me">
    <label for="pwdInput">Password:</label>
    <input type="password" id="pwdInput" required minlength="8" value="123456789">
    <div class="vip">
      <input type="checkbox" name="vip" id="vipCheck">
      <label for="vipCheck">Join as VIP user</label>
    </div>
    <button class="login">Login</button>
  </form>`
const DETAILS_DLG_HTML = `
  <h2></h2>
  <div class="dates">
    <span class="starts"></span>
    <span class="ends"></span>
  </div>
  <div class="location"></div>
  <div class="info"></div>
  <div class="social">
    <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
    <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
  </div>
  <button class="applyBtn">Apply</button>
  <div class="message">msg</div>`
const VIP_ALERT_HTML = `
<span class="stop">&#x26D4;</span>
<p>
  Sorry, but this event is restricted admission!
</p>
<p>
  Our members get access to the best events in town
  using our exclusive VIP pass. Do you want to be part of them?
</p>
<a href="#" target="_blank"><strong>Click here to learn more!</strong></a>`

// Some DOM functions shortcuts.

const DOMCreate = document.createElement.bind(document);
const DOMSelect = document.querySelector.bind(document);
const DOMSelectAll = document.querySelectorAll.bind(document);

// Small general use functions.

const formatDateStr = (str) => (new Date(str)).toLocaleDateString(undefined, DATE_OPTIONS)
const setClass = (className, value, target) => {
  const method = value ? 'add' : 'remove'
  if (typeof target === 'string')
    DOMSelect(target).classList[method](className)
  else
    target.classList[method](className)
}
const setHidden = setClass.bind(null, 'hidden')
const hide = setHidden.bind(null, true)
const unhide = setHidden.bind(null, false)

// Functions to generate a social network sharing link.
// Based on this codepen: https://codepen.io/Huskie/pen/wKphk
const socialNetworkShare = (prefix, target, eventId, e) => {
  e.preventDefault()
  const URL = `${prefix}${DOCUMENT_URL}%3FeventId=${eventId}`
  const popup = window.open(URL,target,'height=350,width=600')
  popup.focus && popup.focus()
}

const twitterShare = socialNetworkShare.bind(null, 'https://twitter.com/share?url=', 'twitter-popup')
const facebookShare = socialNetworkShare.bind(null, 'https://www.facebook.com/sharer/sharer.php?u=', 'facebook-popup')

/**
 * User manager class is responsible for creating, reading and managing users, and user state.
 * This could also be modified so it communicates with an external service, and the transition
 * would be smooth.
 */

const LOGGED_USER_STORAGE_KEY = `${APP_PREFIX}logged_user`
class UserManager {
  hash(str) { // sdbm
    let hash = 0
    for (let i = str.length - 1; i >= 0; --i) {
      hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash
    }
    return hash
  }

  makeKey(email) {
    return `${APP_PREFIX}usr:${email}`
  }

  get loggedEmail() {
    return localStorage[LOGGED_USER_STORAGE_KEY] || null
  }

  set loggedEmail(email) {
    if (email)
      localStorage[LOGGED_USER_STORAGE_KEY] = email
    else
      localStorage.removeItem(LOGGED_USER_STORAGE_KEY)
  }

  get loggedUser() {
    return this.loggedEmail && this.fetchUser(this.loggedEmail)
  }

  set loggedUser({ email }) {
    this.loggedEmail = this.makeKey(email)
  }

  get loggedIsVip() {
    return !!this.loggedUser && !!this.loggedUser.vip
  }

  get loggedIsCandidate() {
    return !this.loggedIsVip
  }

  fetchUser(email) {
    const json = localStorage[this.makeKey(email)]
    return json ? JSON.parse(json) : null
  }

  storeUser(user) {
    localStorage[this.makeKey(user.email)] = JSON.stringify(user)
  }

  create(email, pwd, vip) {
    if (this.fetchUser(email)) {
      throw new Error('User already exists')
    }

    this.storeUser({ email, pwd: this.hash(pwd), vip, events: [] })
    this.loggedEmail = email
  }

  read(email, pwd) {
    let user = this.fetchUser(email)
    if (!user) {
      throw new Error("User doesn't exist")
    }

    if (user.pwd !== this.hash(pwd)) {
      throw new Error("Invalid password")
    }

    this.loggedEmail = email
  }

  logout() {
    this.loggedEmail = null
  }

  loggedCanApply(event) {
    const usr = this.loggedUser
    if (!usr) return false
  }

  loggedAddEvent(eventId) {
    const usr = this.loggedUser
    if (!usr || usr.events.includes(+eventId)) return

    usr.events = [...usr.events, +eventId]
    this.storeUser(usr)
  }

  loggedHasEvent(eventId) {
    const usr = this.loggedUser
    if (!usr) return false

    return usr.events.includes(+eventId)
  }
}

// Singleton UserManager instance.

const userManager = new UserManager()

// Function responsible for fetching data from an external source, or local as in this demo. Returns a promise.
const fetchData = async(size = 20) => {

  /**
   * Uncomment the code below to fetch random data. Just be aware that by doing this, THE DATA
   * WILL BE DIFFERENT WITH EVERY RUN. This means that the event you subscribed before could
   * change its location in the list, or maybe a non-vip user could apply to a vip event.
   */

  // return fetch(`https://api.mockaroo.com/api/d29f6fc0?count=${size}&key=d281b5a0`)
  // .then(resp => resp.ok ? resp.json() : DATA)
  // .catch(() => DATA)

  return Promise.resolve(DATA)
}

/**
 * Function that creates a modal dialog and returns a promise that resolves when the dialog closes.
 * Receives an id for the dialog, an HTML content, a style to apply to the container's parent and
 * a callback to a setup function. By default, the close button will reject the promise.
 *
 * @param {string} id
 * @param {string} html
 * @param {object} style
 * @param {function} setupFn
 */

const modalDialog = (id, html, style = null, setupFn = null) => new Promise((resolve, reject) => {
  let dialog = DOMSelect(`#${id}`)

  if (!dialog) {
    dialog = DOMCreate('div')
    dialog.id = id
    dialog.className = 'dialog hidden';
    dialog.innerHTML = `<div class="backgd"><button class="closeBtn">✖</button><div class="container">${html}</div></div>`
    dialog.querySelector('.closeBtn').onclick = () => {
      hide(dialog)
      reject('by-closeBtn')
    }
  }

  if(style) {
    const backgd = dialog.querySelector('.backgd')
    Object.entries(style).forEach(([key,val]) => backgd.style[key] = val)
  }

  if (setupFn) setupFn(dialog, resolve, reject)

  //DONE: Bring new dialogs infront of previous ones
  // It's important to repeat this even for existing dialogs,
  // to keep them on top of all the rest.

  DOMSelect('main').appendChild(dialog)
  unhide(dialog)
})

/**
 * Function to create a login form. Returns a promise that will resolve returning the user info.
 *
 * @param {boolean} join - Indicates if it's a Join or Login dialog.
 */

const execLogin = (join = false) => modalDialog('log-dialog', LOG_DLG_HTML, { width: '20rem', height: '16rem' },
  (dlg, resolve) => {
    setHidden(!join, dlg.querySelector('.vip'))
    dlg.querySelector('.login').onclick = (e) => {
      e.preventDefault()

      const form = dlg.querySelector('form')
      if (!form.checkValidity()) {
        form.reportValidity()
        return
      }

      const email = dlg.querySelector('#emailInput').value
      const pwd = dlg.querySelector('#pwdInput').value
      const vip = dlg.querySelector('#vipCheck').checked
      hide(dlg)

      resolve({ email, pwd, vip })
    }
  }
)

/**
 * Returns a simple alert modal dialog with the passed message.
 * @param {string} message
 * @param {string} width - CSS width value
 */

const alertDlg = (message, width = 'auto') => new Promise(resolve => {
  modalDialog('alert-dialog', '', { width, maxWidth: '90%', height: 'auto' },
    (dlg) => {
      dlg.querySelector('.container').innerHTML = message
      dlg.querySelector('.closeBtn').onclick = (e) => {
        e.preventDefault()
        hide(dlg)
        resolve(dlg)
      }
    }
  )
})

/**
 * Callback for the type filter buttons.
 * @param {object} DOM click event
 */

const applyFilter = ({ target }) => {
  const filter = target.dataset.filter
  const panels = DOMSelectAll(`.event-panel`)
  panels.forEach((panel) => {
    if (filter === 'any' || panel.dataset.type === filter)
      unhide(panel)
    else
      hide(panel)
  })
}

/**
 * Function to apply the current logged user state to all event panels
 */

const applyUser = () => {
  const user = userManager.loggedUser

  setClass('candidate-user', userManager.loggedIsCandidate, '#events-container')

  const panels = DOMSelectAll(`.event-panel`)
  panels.forEach((panel) => {
    const eventId = panel.dataset.eventId
    const applied = user && userManager.loggedHasEvent(eventId)
    setHidden(!applied, panel.querySelector('.applied'))
  })
}

/**
 * Try to apply the currently logged user to the event identified by id. Returns
 * a boolean indicating the success result.
 * @param {int} id - Event id
 * @param {boolean} vip - It's a vip event?
 */

const applyToEvent = async (id, vip) => {
  if (userManager.loggedIsVip || !vip) {
    if (userManager.loggedHasEvent(id)) {
      await alertDlg(`You have already applied for this event!`)
    } else {
      userManager.loggedAddEvent(id)
      applyUser()
      await alertDlg(`You've successfuly applied to this event!`)
    }
  } else {
    await alertDlg(VIP_ALERT_HTML, '400px')
    return false
  }
  return true
}

/**
 * This function will display the passed event data in a modal dialog. It will also take care of displaying
 * an apply button and display an error message if the user couldn't apply for the event.
 * @param {object} event object
 */

const displayEventDetails = async ({ id, type, title, starts, ends, location, description }) => {

  const { img, vip } = EVENTS[type.toLowerCase()]

  await modalDialog('details-dialog', DETAILS_DLG_HTML, null,
    (dlg) => {

      const container = dlg.querySelector('.container')
      const lines = description.split("\n").map(line => line.trim())

      dlg.querySelector('.backgd').style.backgroundImage = `url(${IMAGE_PATH}/${img})`
      dlg.dataset.eventId = id

      container.querySelector('.info').innerHTML = `<p>${lines.join("</p><p>")}</p>`
      container.querySelector('h2').innerText = title
      container.querySelector('.starts').innerText = formatDateStr(starts)
      container.querySelector('.ends').innerText = formatDateStr(ends)
      container.querySelector('.location').innerText = location

      container.querySelector('.twitter').onclick = twitterShare.bind(null, id)
      container.querySelector('.facebook').onclick = facebookShare.bind(null, id)

      let msg = ''
      if (!userManager.loggedUser) {
        msg = MSG_LOG_IN_TO_APPLY
      } else if (userManager.loggedHasEvent(id)) {
        msg = MSG_ALREADY_APPLIED
      }

      container.querySelector('.message').innerText = msg

      const aplyBtn = dlg.querySelector('.applyBtn')
      if (userManager.loggedUser && !userManager.loggedHasEvent(id)) {
        aplyBtn.onclick = async () => {
          if (await applyToEvent(id, vip)) {
            hide(aplyBtn)
            container.querySelector('.message').innerText = MSG_ALREADY_APPLIED
          }
        }
        unhide(aplyBtn)
      } else {
        hide(aplyBtn)
      }
    }
  ).catch(() => null) // Dialog closed; just ignore
}

/**
 * This function will setup the filter menu contents, and callbacks.
 */

const setupMenu = () => {

  const createItem = (name, filter = name) => {
    const item = DOMCreate('li')
    item.innerText = name
    item.dataset.filter = filter
    item.addEventListener('click', applyFilter)
    return item
  }

  const container = DOMSelect('#events-menu')
  container.appendChild(createItem('All', 'any'))

  Object.keys(EVENTS).forEach((key) => {
    const event = EVENTS[key]
    container.appendChild(createItem(event.name, key))
  })
}

/**
 * Function that receives an array of event objects and creates the corresponding DOM entity.
 * Panels will be sorted by starting date.
 * @param {array<object>} data - An array of event objects.
 */

const createEvents = (data) => {

  // Simple auxiliar function to convert a date string to a number. Used for date sorting.
  const getMS = (info) => (new Date(info.starts)).getTime()

  // Create a single event panel for this event's info.
  const makePanel = (info) => {
    let { id, type, title, starts, ends, location } = info
    const { vip, img } = EVENTS[type.toLowerCase()]
    title = title[0].toUpperCase() + title.slice(1)

    const panel = DOMCreate('section')
    panel.className = `event-panel ${type.replace(/_/g,'-')}`
    setClass('vip', vip, panel)
    panel.dataset.eventId = id
    panel.dataset.type = type
    panel.innerHTML = `
      <img src="${IMAGE_PATH}/${img}">
      <h2>${title}</h2>
      <span class="applied">Applied</span>
      <span class="starts">${formatDateStr(starts)}</span>
      <span class="ends">${formatDateStr(ends)}</span>
      <span class="location">${location}</span>
    `;

    const detailsBtn = DOMCreate('button')
    detailsBtn.innerText = 'See details'
    detailsBtn.addEventListener('click', () => displayEventDetails(info))
    panel.appendChild(detailsBtn)

    return panel
  }

  const container = DOMSelect('#events-container')
  data
    .sort((a,b) => getMS(a) - getMS(b))
    .forEach((eventInfo) => container.appendChild(makePanel(eventInfo)))
}

/**
 * Update the currently logged user display (header and panels state)
 */

const updateCurrentUserDisplay = () => {
  const usrLabel = DOMSelect('#loggedUser')
  if (userManager.loggedUser) {
    usrLabel.innerText = userManager.loggedUser.email
  } else {
    usrLabel.innerText = 'Anonymous'
  }
  setClass('vip', userManager.loggedIsVip, usrLabel)
  applyUser()
}

/**
 * Initializes the user's login, join and logout buttons.
 */

const setupLoginBtns = () => {

  const onJoin = async ({ email, pwd, vip }) => {
    try {
      userManager.create(email, pwd, vip)
    } catch(e) {
      await alertDlg(e.message)
    }
    updateCurrentUserDisplay()
  }

  const onLogin = async ({ email, pwd }) => {
    try {
      userManager.read(email, pwd)
    } catch(e) {
      await alertDlg(e.message)
    }
    updateCurrentUserDisplay()
  }

  const onLogout = () => {
    userManager.logout()
    updateCurrentUserDisplay()
  }

  DOMSelect('#loginBtn').addEventListener('click', () => execLogin(false).then(onLogin))
  DOMSelect('#joinBtn').addEventListener('click', () => execLogin(true).then(onJoin))
  DOMSelect('#logout').addEventListener('click', () => onLogout())
}

/**
 * This function checks the URL parameters and if it finds an eventId parameter
 * it will display the corresponding event from the passed array. This is used
 * for displaying the corresponding event when using the "sharing in Twitter/Facebook"
 * buttons.
 * @param {array<object>} data
 */

const showByRef = (data) => {
  const urlParams = new URLSearchParams(window.location.search)
  const eventId = +urlParams.get('eventId')
  if (eventId) {
    const event = data.find(evt => evt.id === eventId)
    if (event) displayEventDetails(event)
  }
}

/**
 * Displays the intro panel.
 */
const intro = async() => {
  const key = `${APP_PREFIX}dont-show-again-intro`
  if (localStorage[key]) return

  await alertDlg(`
    <div style="overflow-y: auto; max-height: 60vh; font-size: 12pt;">
      This project is for an events page. It lets you:
      <ul>
        <li>
          Display more details of an event.
        </li>
        <li>
          Apply to an event and see confirmation of your application.
        </li>
        <li>
          You can share the event with a friend through Twitter & Facebook.
        </li>
        <li>
          Non-VIP logged users see a friendly error warning when trying to apply for an invite-only event, with a call to action to read more about a membership plan.
        </li>
        <li>
          Concert, art exposition and sports events visually stand out to non-VIP users.
        </li>
        <li>
          Invite only events are distinguished from the free admission ones.
        </li>
      </ul>
      Other features are:
      <ul>
        <li>
          Since this is a front-end project, the Join, Log-in and Logout functions were simulated in local storage. They persist between sessions but don't involve any communication with a server.
        </li>
        <li>
          To create a new user, use the 'Join' button and indicate if it's VIP or not. Joining logs you in automatically.
        </li>
        <li>
          Join and Login require a valid email and password.
        </li>
        <li>
          A logged user persists between sessions.
        </li>
        <li>
          A VIP user is indicated with a crown (&#x1F451;) to the left.
        </li>
        <li>
          The app is responsive in general but the filter menu does not display very nice in small screens; this is an aspect that needs improving.
        </li>
        <li>
          To clear all users, issue the command <strong>localStorage.clear()</strong> in the JavaScript browser's console.
        </li>
      </ul>
    </div>
    <div style="text-align: center; margin: 2rem 0 0 0">
      <input type="checkbox" id="dont-show-again-intro">
      <label for="dont-show-again-intro">Don't show this message again</label>
    </div>
  `, '800px')
  .then(dlg => {
    if (dlg.querySelector('#dont-show-again-intro').checked){
      localStorage[key] = 'true'
    }
  })
}

/**
 * Main function
 */
const main = () => {
  setupMenu()
  setupLoginBtns()
  fetchData().then(data => {
    createEvents(data)
    updateCurrentUserDisplay()
    showByRef(data)
  })
  intro()
}

// ******************************************************************************************************
// * Important!:                                                                                        *
// * To clear all users, issue the command "localStorage.clear()" in the JavaScript browser's console.  *
// ******************************************************************************************************

main()  // Entry point
