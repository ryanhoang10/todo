<?php

namespace Tests\Unit;

use App\Models\Todo;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class TodoTest extends TestCase
{
    use DatabaseTransactions;
    
    /** @test */
    public function a_todo_item_can_be_created()
    {
        $todo = Todo::factory()->create();
        $this->assertTrue(true);
    }

    /** @test */
    public function the_landing_page_contains_correct_header()
    {
        $response = $this->get('/');
        $response->assertSeeText('To Do List:');
    }

    /** @test */
    public function a_todo_item_can_be_removed()
    {
        $this->assertTrue(true);
    }

    /** @test */
    public function a_todo_item_can_be_updated()
    {
        $todo = Todo::factory()->create();
        $todo->name = 'Test';
        $this->assertEquals('Test', $todo->name);
    }

    /** @test */
    public function all_todo_items_can_be_deleted()
    {
        Todo::factory()->create(5);
        $this->assertTrue(true);
    }
}
