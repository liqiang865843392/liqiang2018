import Vue from 'vue'
//这里放一些全局的自定义组件
import MySelect from '@/components/common/MySelect';
import LineSelect from '@/components/common/LineSelect';
import ChooseColor from '@/components/common/ChooseColor';
import TextInput from '@/components/common/TextInput';
import MyRadio from '@/components/common/MyRadio';
import MySlider from '@/components/common/MySlider';
import CodeEdit from '@/components/common/CodeEdit';
import Modal from '@/components/common/Modal';
import TableData from '@/components/common/TableData';
import DateFormat from '@/components/common/DateFormat';
import IconRadio from '@/components/common/IconRadio';

Vue.component('MySelect', MySelect);
Vue.component('LineSelect', LineSelect);
Vue.component('ChooseColor', ChooseColor);
Vue.component('TextInput', TextInput);
Vue.component('MyRadio', MyRadio);
Vue.component('MySlider', MySlider);
Vue.component('TableData', TableData);
Vue.component('CodeEdit', CodeEdit);
Vue.component('Modal', Modal);
Vue.component('DateFormat', DateFormat);
Vue.component('IconRadio', IconRadio);

