export class Course{
    courseId:number; 
    name:string; 
    description:string; 
    instructor:string;
    active:boolean;
    image:string;
    availableSeats:number;
    credits:number;
    enrolledCount:number;

    constructor(courseId,name,description,instructor,
        active,image,availableSeats, credits){
        this.courseId = courseId;
        this.name = name;
        this.description = description;
        this.instructor = instructor;
        this.image = image;
        this.active = active;
        this.availableSeats = availableSeats;
        this.credits = credits;
    }
}