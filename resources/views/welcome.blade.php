<div class="">
    <div class="mb-4">
        <form autocomplete="off">
            <input type="text" id="todo" class="shadow appearance-none border rounded py-1 px-2 text-gray-700">
            <button id="add-todo-item" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded">Create</button>
        </form>
    </div>
    <div>
        <ul>
            @foreach ($todo as $item)
            <div class="appearance-none border rounded">
                <li class="pt-4 pb-8 px-6">
                    <input type="checkbox" class=" float-left mt-1 mr-2 todo-item-done-{{ $item->id }}" name="todo-item-done">
                    <span class="todo-item-{{ $item->id }} float-left">{!! $item->name !!}</span>
                    <input type="text" name="todo-item" class="float-left shadow appearance-none border px-1 rounded editing-todo-item editing-{{ $item->id }}" value="{{ $item->name }}">
                    <div class="float-right">
                        <span class="cursor-pointer bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded edit-todo-item edit-{{ $item->id }}" data-id="{{ $item->id }}" data-item="{{ $item->name }}">Edit</span>
                        <span class="cursor-pointer bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded update-todo-item update-{{ $item->id }}">update</span>
                        <span class="cursor-pointer bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded cancel-todo-item cancel-{{ $item->id }}">cancel</span>
                        <span class="cursor-pointer bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded remove-todo-item remove-{{ $item->id }}" data-id="{{ $item->id }}">Remove</span> 
                    </div>
                    
                </li>
            </div>
            @endforeach   
        </ul>
        <button class="mt-3 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded" id="remove-all-todo-items">Remove All</button>   
    </div>
</div>

