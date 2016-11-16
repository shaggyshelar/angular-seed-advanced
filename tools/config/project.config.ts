import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = ['node_modules/font-awesome/fonts/**','node_modules/simple-line-icons/fonts/**'];

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'primeng/resources/primeng.min.css', inject: 'libs' },
      { src: 'primeng/resources/themes/omega/theme.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'simple-line-icons/css/simple-line-icons.css', inject: true },
      // { src: 'fullcalendar/dist/fullcalendar.min.css', inject: true },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: 'bootstrap-switch/dist/js/bootstrap-switch.min.js', inject: 'libs' },
      { src: 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css', inject: true },
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      { src: `${this.APP_SRC}/assets/global/css/components.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/css/plugins.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/css/layout.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/css/themes/default.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/css/custom.css`, inject: true, vendor: false },

      //TODO: Check if we can use it from npm packages
      // { src: `${this.APP_SRC}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js`, inject: true, vendor: false },
      // { src: `${this.APP_SRC}/assets/global/plugins/jquery.blockui.min.js`, inject: true, vendor: false },
      
      { src: `${this.APP_SRC}/assets/global/scripts/app.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/scripts/layout.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/scripts/demo.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/global/scripts/quick-sidebar.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/global/scripts/quick-nav.min.js`, inject: true, vendor: false },
    ];

    // Add packages (e.g. lodash)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'lodash',
    //   path: `${this.APP_BASE}node_modules/lodash/lodash.js`,
    //   packageMeta: {
    //     main: 'index.js',
    //     defaultExtension: 'js'
    //   }
    // }];
    //
    // or
    //
    // let additionalPackages: ExtendPackages[] = [];
    //
    // additionalPackages.push({
    //   name: 'lodash',
    //   path: `${this.APP_BASE}node_modules/lodash/lodash.js`,
    //   packageMeta: {
    //     main: 'index.js',
    //     defaultExtension: 'js'
    //   }
    // });
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
