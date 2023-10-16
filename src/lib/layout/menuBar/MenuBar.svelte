<script>
    import { toggleMenu } from "../../store";

    const handleToggleMenu = () => {
        $toggleMenu = false;
    }


</script>

<div class={$toggleMenu == null ? "hidden" : ""}>

    <div class={$toggleMenu ? "sidemenu" : "closemenu"}>

            <div on:click={handleToggleMenu} class="navigation first">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg> 
                
            </div>

            <div class="navigation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
            </svg>
            </div>

            <div class="navigation">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>

            <div class="navigation">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>              
            </div>
            
            <div class="navigation">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>              
            </div>

            
    </div>
</div>


<style>
    .sidemenu {
    width: 6vh; 
    height: 100%; 
    background-color: #333; 
    color: #fff; 
    position: fixed; 
    top: 0;
    left: 0;
    overflow-y: auto; 
    animation-name: menuin;
    animation-duration: 0.5s; 
    justify-content: center;
    display: grid;
    grid-template-rows: 6vh 6vh 6vh 6vh 6vh 1fr;
    row-gap: 10px;
    z-index: 200;
    }

    @keyframes menuin {
        from {
            width: 0;
        }
        to {
            width: 6vh;
        }
    }

    .navigation{
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 8px 8px 8px 8px;
        border-radius: 5px;
       
    }
    .navigation:active{
        background-color: rgba(187, 187, 187, 0.4);
        padding: 8px 8px 8px 8px;
        border-radius: 5px;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    

    .first{
        justify-self: center;
        align-self: center;
    }
    
    .closemenu{

        width: 0; 
        height: 100%; 
        background-color: #333; 
        color: #fff; 
        position: fixed; 
        top: 0;
        left: 0;
        overflow-y: auto; 
        animation-name: menuout;
        animation-duration: 0.5s; 
        justify-content: center;
        display: grid;
        grid-template-rows: 6vh 6vh 6vh 6vh 6vh 1fr;
        row-gap: 10px;
        z-index: 200;

    }

    @keyframes menuout {
        from {
            width: 6vh;
        }
        to{
            width: 0vh;
        }
    }
    


</style>