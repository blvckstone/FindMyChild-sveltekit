<script>
    import { toggleMenu } from "../../store";

 

    const handleToggleMenu = () => {
        $toggleMenu = true;
    }
    
   
    

</script>


<nav class="homeDiv">
    <button class="menu" on:click={handleToggleMenu}><span class="menuspan material-symbols-outlined">menu</span></button>
    <div class="brand"><a href="/">Find My Child</a></div>
    <button class="cart"><span class="cartspan material-symbols-outlined">person</span></button>
</nav>

<style>
    .homeDiv{
        height: 6vh;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.2);
        position: sticky;
        top: 0;
        left: 0;
        width: 100%; /* Make it full width */
        background-color: #ffffff;
        display: grid; 
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        justify-items: center;
        z-index: 100;
    }

    .brand{
        font-size: 20px;
    }


    .menu{
        display: grid;
        align-items: center;
        justify-content: center;
        -webkit-tap-highlight-color: transparent;
    }
    
    .menu:active{
        background-color: rgba(187, 187, 187, 0.4);
        padding: 5px 8px 5px 8px;
        border-radius: 5px;
    }

    .menuspan{
        font-size: 30px;
    }

    .cart{
        display: grid;
        align-items: center;
        justify-content: center;
        cursor: pointer;

    }
    .cartspan{
        font-size: 30px;
    }
</style>