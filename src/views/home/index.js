//@flow
import * as Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";

@Component({ name: 'Home' })
export default class Home extends VUe {
    data() {
        return {
            sysName: 'VUEADMIN',
            collapsed: false,
            sysUserName: '',
            sysUserAvatar: '',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    }
    mounted() {
        var user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.sysUserName = user.name || '';
            this.sysUserAvatar = user.avatar || '';
        }

    }

    onSubmit() {
        console.log('submit!');
    }
    handleopen() {
        //console.log('handleopen');
    }
    handleclose() {
        //console.log('handleclose');
    }
    handleselect(a, b) {}
    //退出登录
    logout() {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
            //type: 'warning'
        }).then(() => {
            sessionStorage.removeItem('user');
            _this.$router.push('/login');
        }).catch(() => {

        });

    }
    //折叠导航栏
    collapse() {
        this.collapsed = !this.collapsed;
    }
    showMenu(i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' :
            'none';
    }
}
