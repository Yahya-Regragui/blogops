<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class TaskApiTest extends TestCase
{
    //    $response = $this->postJson('/api/article', ['title' => 'test', 'body'=>'test']);

    //    $response
    //        ->assertStatus(201)
    //        ->assertJson([
    //            'created' => true,
    //        ]);



    public function test_can_create_task(){
        $formData=[
            'article_id'=>200,
           'title'=>'first task',
           'body' =>'first task'
        ];

        $this->withoutExceptionHandling();
       $this->postJson('/api/article', $formData)
       ->assertStatus(201) ;
    
    }
    public function test_can_show_all_tasks(){
        

        $this->withoutExceptionHandling();
       $this->get('/api/articles')
       ->assertStatus(200) ;
    
    }
    public function test_can_show_specific_task(){
        

        $this->withoutExceptionHandling();
       $this->get('/api/article/200')
       ->assertStatus(200) ;
    
    }
    public function test_can_show_delete_task(){
        

        $this->withoutExceptionHandling();
       $this->delete('/api/article/200')
       ->assertStatus(200) ;
    
    }
    
}
