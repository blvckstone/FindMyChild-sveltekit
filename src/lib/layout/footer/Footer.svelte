<script>
    import childicon from '../../images/child.png'
</script>
<div class="footer">

    <div class="firsthalf">

        <a href="/" class="home">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
        </a>

        <a href="/get/bydate" class="search">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>                
            </div>
        </a>
    </div>
    
    <div class="center">
        <a href="/post" class="addchild">
        <div class="addchild">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="wishspan w-10 h-10">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
            </svg>  
        </div>
        </a>
    </div>
    
    <div class="lasthalf">

        <div class="contact">
            <span class="material-symbols-outlined">
                conditions
            </span>
        </div>
    
        <div class="info">
            <span class="material-symbols-outlined">
                person_search
            </span>
        </div>

    </div>
    
</div>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 6vh;
        box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.1);
        width: 100%; /* Make it full width */
        background-color: #ffffff; /* Set the background color */
        padding-top: -10px; /* Add padding as needed */
        text-align: center; /* Center align text */
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        align-items: center;
        /* justify-content: center; */
    }
    .firsthalf{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        /* justify-content: center; */
    }
    .lasthalf{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .center{
        display: grid;
        grid-template-columns: 1fr;
        
    }
    .wishspan{
  
        font-variation-settings: 'FILL' 1;
        color: #ff5757;  

    }
    .addchild{
        align-self: baseline;
        justify-self: center;
        
       
    }
    .search{
        align-self: center;
        justify-self: center;
        -webkit-tap-highlight-color: transparent;
    }
    .search:active{
        padding: 10px 10px 10px 10px;
        background-color: rgba(187, 187, 187, 0.4);
        border-radius: 5px;
       
        

    }
    .home{
        align-self: center;
        justify-self: center;
       
        -webkit-tap-highlight-color: transparent;
    }
    .home:active{
        padding: 8px 10px 8px 10px;
        background-color: rgba(187, 187, 187, 0.4);
        border-radius: 5px;

    }
    .info{
        align-self: center;
        justify-self: center;
     
    }
    .contact{
        align-self: center;
        justify-self: center;
    }
    
    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 50
    }

    .svg:active{
        width: 22px;
        height: 22px;
    }

</style>