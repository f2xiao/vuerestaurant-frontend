import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            primary: '#c8b8d9',
            secondary: '#02977c',
            accent: '#f9f1e8',
            error: '#f38daf',
            warning: '#db5852',
            info: '#dbceb2',
            success: '#8ad6d6'
          }
        }
       }
});
