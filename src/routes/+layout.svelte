<script>
    import Header from "../lib/layout/header/Header.svelte";
    
    import Footer from "../lib/layout/footer/Footer.svelte";
    import FooterBar from "../lib/layout/footerBar/FooterBar.svelte";
    import '../../src/app.css'
    import MenuBar from "../lib/layout/menuBar/MenuBar.svelte";
    import NProgress from 'nprogress'
    import {navigating} from '$app/stores'
  
    import 'nprogress/nprogress.css'
  
    NProgress.configure({
        // Full list: https://github.com/rstacruz/nprogress#configuratio
          minimum: 0.16,
          showSpinner: false,
    
      })
  
    $: {
      if ($navigating) {
        NProgress.start();
      }
      if (!$navigating) {
        NProgress.done();
      }
    }
</script>

<Header />

<MenuBar />
<div>
    <slot></slot>
</div>
<FooterBar />
<Footer />