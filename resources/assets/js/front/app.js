
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

export const eventBus = new Vue();

import VeeValidate, { Validator } from 'vee-validate'
import CpfValidator from './components/validators/cpf.validator'
import Portuguese from 'vee-validate/dist/locale/pt_BR'
import Dictionary from './components/validators/dictionary'
import VTooltip from 'v-tooltip'

import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
Vue.component('sweet-modal', SweetModal)
Vue.component('sweet-modal-tab', SweetModalTab)

import moment from 'moment'
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

import { extendMoment } from 'moment-range';
const momentRange = extendMoment(moment);
Object.defineProperty(Vue.prototype, '$momentRange', { value: momentRange })



moment.locale('pt-br')


Validator.extend('cpf', CpfValidator)
Validator.addLocale(Portuguese);

Vue.use(VeeValidate, {
    locale: 'pt_BR', 
    dictionary: Dictionary
});

Vue.use(VTooltip)

Vue.config.debug = true


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('avatar', require('./components/AvatarUpload.vue'));
Vue.component('front-cadastro-vendedor', require('./components/CadastroVendedor.vue'));
Vue.component('query-home', require('./components/QueryHome.vue'));
Vue.component('address-items', require('./components/Addresses.vue'));
Vue.component('new-address', require('./components/NewAddressForm.vue'));
Vue.component('list-chefs', require('./components/ListChefs.vue'));
Vue.component('search-chef', require('./components/SearchChef.vue'));

//Single Page
Vue.component('cardapio', require('./components/single-chef/Cardapio.vue'));
Vue.component('cart', require('./components/single-chef/Cart.vue'));

//Profile page
Vue.component('profile-dados', require('./components/ProfileDados.vue'));
Vue.component('profile-senha', require('./components/ProfileSenha.vue'));




