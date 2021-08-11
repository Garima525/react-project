<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Course;

class CourseController extends Controller
{
    function addCourse(Request $req)
    {
        $course=new Course();
        $course->name=$req->input('name');
        $course->description=$req->input('description');
        $course->price=$req->input('price');
        $course->file=$req->file('file')->store('images');
        $course->save();
        return $course;
    }
    function list()
    {
        return Course::all();
    }
    function delete($id)
    {
        $res = Course::where('id',$id)->delete();
        if($res){
            return ["result"=>"Product Deleted successfully....."];
       }
       else
       {
            return ["result"=>"Operation failed..."];
       }
    }
    function getCourse($id)
    {
        return  Course::find($id);
    }
    function updateCourse($id, Request $req)
    {
        $course = Course::find($id);
        $course->name=$req->input('name');
        $course->description=$req->input('description');
        $course->price=$req->input('price');
        if($req->file('file'))
        {
            $course->file=$req->file('file')->store('images');
        }
        $course->save();
        return $course;
    }
    function search($key)
    {
        return Course::where('name','LIKE',"%$key%")->get();
    }
}
