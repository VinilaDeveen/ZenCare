//---StudentController

package com.Accupuncture.Accupuncture.controller;

import com.Accupuncture.Accupuncture.entity.Student;
import com.Accupuncture.Accupuncture.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public Student savePatient(@RequestBody Student student){
        return studentService.saveDetails(student);
    }

    @GetMapping("/getAllStudents")
    public List<Student> getDetails(){
        return studentService.getAllDetails();
    }

    @GetMapping("/getStudentBYID/{studentID}")
    public Student getDetailsByID(@PathVariable int studentID){
        return studentService.getStudentDetailsByID(studentID);
    }

    @PutMapping("/updateStudent/{studentID}")
    public Student updateStudentDetails(@RequestBody Student student){
        return studentService.updateStudentDetails(student);
    }

    @DeleteMapping("/deleteStudent/{studentID}")
    public String deleteStudentDetails(@PathVariable int studentID){
        return studentService.deleteStudent(studentID);
    }
}
