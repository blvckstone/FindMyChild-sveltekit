<script>
    import { urlWithDate, loadingList, searchingDate,} from '$lib/store';
    import { invalidateAll } from '$app/navigation';

    async function pageRefresh() {
        await invalidateAll();
    }

   
    export let data;
    $: ({ childrenData } = data)

    
   
    const setSearchUrl = ()=> {
        $urlWithDate = "http://192.168.0.224:3001/"; //We are re-setting requesting url because when someone clicking multiple submit btn then string adding new values ahead
        $urlWithDate = $urlWithDate+"?missingDate="+$searchingDate;
        $loadingList = true;
        pageRefresh()
    }

</script>




<ul role="list" class="mainul ml-2 mr-2 mt-2 ">

    

        <div class="divdatepicker" >
            <p class="dateplaceholder">Date</p>
            <input datepicker bind:value={$searchingDate} on:change={setSearchUrl} datepicker-autohide type='date' id='date' class="datepicker text-sm rounded block w-full  p-2.5" placeholder="Select date" name='missingDate'/>
        </div>

    
    


    {#if childrenData.length == 0}

        <p class="notFound">Child Data Not Found</p>    
            
    {:else}

        {#if $loadingList}

                <div class="loadingDiv"></div>
            
                <p class="loading">Loading...</p>

        {:else}
                {#each childrenData as child}
                
                        <li class="mainli border p-3 mb-1 rounded-lg">

                            <div class="firstdiv">

                                    <img class="roundimg rounded-full h-12 w-12" src={child.image || child.img} alt="">

                                    <div class="firstdiv1">
                                        <p class="name text-sm font-semibold leading-6 text-gray-900">{child.fullName}</p>
                                        <p class="description mt-1 truncate text-xs leading-5 text-gray-500">{child.address}</p>
                                    </div>

                            </div>

                            <div class="seconddiv">
                                <p class={child.found ? "other text-sm leading-6 text-gray-900 text-green-600" : "other text-sm leading-6 text-gray-900 text-red-600"}>{child.found  ? "Found" : "Missing"}</p>
                                <p class="status mt-1 text-xs leading-5 text-gray-500 text-blue-400">{child.missingDate}</p>
                            
                            </div>

                        </li>  

                {/each}
         
        {/if}

    {/if}
  
</ul>




<style>
    .mainul{
        display: grid;
        grid-template-columns: 1fr;
    }
    .mainli{
        display: grid;
        grid-template-columns: 2fr 1fr;
        background-color: white;
        border: 1px solid rgb(207, 207, 207);
    }
    .firstdiv{
        display: grid;
        grid-template-columns: 1fr 4fr;
        
    }
    .firstdiv1{
        display: grid;
        grid-template-rows: 1fr 1fr;
        margin-left: 10px;
    }
    .seconddiv{
        display: grid;
        grid-template-rows: 1fr 1fr;
        justify-content: end;
        text-align: end;
    }
    .other{
        font-size: 12px;
        font-weight: 500;
    }
    .status{
        font-size: 10px;
        font-weight: 500;
    }

    .divdatepicker{
        display: grid;
        grid-template-columns: 15% 1fr;
        align-items: center;
        justify-content: center;
        background-color: white;
        border: 1px solid rgb(207, 207, 207);
        color: black;
        border-radius: 5px;
        margin-bottom: 10px;
       
    }


    .dateplaceholder{
        text-align: center;
       
       
        
    }
    .datepicker:focus{
        outline: none;

    }
    .datepicker:active{
        padding: 10px 10px 10px 10px;
        background-color: rgba(187, 187, 187, 0.4);
        border-radius: 5px;
    }
    input::placeholder {
    color: rgb(0, 0, 0);
    font-style: italic;
    }

    .notFound{
        text-align: center;
        padding: 5px;
        margin: 10px;
        color: gray;
        font-size: 15px;
        
    }

    .loading{
        text-align: center;
        padding: 5px;
        margin: 10px;
        color: gray;
        font-size: 15px;
        
    }
</style>


  