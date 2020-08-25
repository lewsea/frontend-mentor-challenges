const NEXT = document.getElementById('next');
const PREVIOUSLY = document.getElementById('previously');

const image = document.getElementById('profilePic');
const description = document.getElementById('description');
const name = document.getElementById('name');
const job = document.getElementById('job');

const tanya = {
  id: 0,
  name: 'Tanya Sinclair',
  description: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future. ”`,
  job: 'UX Engineer',
  image: 'images/image-tanya.jpg',
};

const john = {
  id: 1,
  name: 'John Tarkpor',
  description: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
  job: 'Junior Front-end Developer',
  image: 'images/image-john.jpg',
};

NEXT.onclick = () => {
  validation();
};
PREVIOUSLY.onclick = () => {
  validation();
};

const validation = () => {
  if (name.textContent === tanya.name) {
    nextPerson(john);
  } else {
    nextPerson(tanya);
  }
};

const nextPerson = (person) => {
  image.setAttribute('src', person.image);
  name.textContent = person.name;
  description.textContent = person.description;
  job.textContent = person.job;
};
