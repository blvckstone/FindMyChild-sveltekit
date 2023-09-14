<script>
    import {childrenData} from '../../../lib/data';
</script>




<ul role="list" class="mainul m-2 ">

    {#each childrenData as child}
        

        <li class="mainli border p-2 mt-1 rounded">

            <div class="firstdiv">

                    <img class="roundimg rounded-full h-12 w-12" src={child.img} alt="">

                    <div class="firstdiv1">
                        <p class="name text-sm font-semibold leading-6 text-gray-900">{child.fullName}</p>
                        <p class="description mt-1 truncate text-xs leading-5 text-gray-500">{child.address}</p>
                    </div>

            </div>

            <div class="seconddiv">
                <p class={child.found ? "other text-sm leading-6 text-gray-900 text-green-600" : "other text-sm leading-6 text-gray-900 text-red-600"}>{child.found ? "Found" : "Missing"}</p>
                <p class="status mt-1 text-xs leading-5 text-gray-500 text-blue-400">{child.missingDate}</p>
            </div>

        </li>

    {/each}
    
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
</style>


  