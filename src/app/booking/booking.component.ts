import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  randomid;
  data;


  constructor( private formBuilder: FormBuilder, private listingservice: MoviesService ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      movietime: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date:['',Validators.required],
      seats:['',Validators.required],
      
      acceptTerms: [false, Validators.requiredTrue]
  });

    this.randomid = Math.floor((Math.random()*6)+1);   

  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

        this.data = this.registerForm.value;
       this.data.id = this.randomid;
        console.log(this.data);
       
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}
