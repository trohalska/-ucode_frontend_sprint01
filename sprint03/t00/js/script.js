'use strict';

let superTeam = {},
    str;

superTeam.title = prompt('Name of the team: ');
superTeam.leader = prompt('Leader of the team: ');
str = prompt('Mmembers of the team.\nEnter the names separated by a comma.');
superTeam.members = str.split(',');
superTeam.agenda = prompt('Goals and ideas the team: ');
superTeam.isEvil = false;
<<<<<<< HEAD
str = prompt('If team is evil enter "evil" precisely, \
everithing else for team is good: ');
=======
str = prompt('If team is evil enter "evil" precisely, everithing else for team is good: ');
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
if (str === 'evil') superTeam.isEvil = true;

console.log(superTeam);

alert(`Here's the team:
name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members.join(', ')}
memberCount - ${superTeam.members.length}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`);