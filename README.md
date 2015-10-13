# RocketRide


## Minimum Viable Product

RocketRide is a spaceship sharing service inspired by Couchsurfing built using React.js and Ruby on Rails.
With RocketRide, users can:

- [X] Sign up, sign in and sign out
- [ ] Search available rockets by start and end date, ship type, and captain's name
- [ ] Make and cancel spaceship reservations
- [ ] Flag rockets as "favorites" and view them later, after logging out and logging back in or after idling their computer
- [ ] Create and delete their own rockets listings
- [ ] Accept or reject reservations from other users on their rockets


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User Model, Rocket Model, and JSON API (2 Days)

I will implement user authentication using BCrypt.  After this phase, there will be a sign up page,
a sign in page, and a basic landing page after sign in that will eventually display the RocketIndex.
Additionally, I will create an API for later front end use and also create basic models for the user and rocket.

[Details][phase-one]

### Phase 2: Flux Architecture and React Router (3 Days)

This phase will focus on setting up the architecture of the app, including React views, stores, and router.
At the end of this phase, I will have implemented a rocket store as well as views for the rocket index, the rocket,
the rocket reservation form, and the rocket creation form.  At the end of the phase, users will be able to create their
own rockets, as well as request reservations of others' rockets.  I will also begin incorporating Bootstrap for
some basic styling at this stage.

[Details][phase-two]

### Phase 3: Accepting and Rejecting Reservations (1 Days)

During this phase, I will implement the logic as well as the UI for accepting and rejecting requested
reservations.  At the end of the this phase, a user's RocketReservationIndex view will include optiosn to
accept or reject reservations.

[Details][phase-three]

### Phase 4: Search and Favorites (1.5 Day)

This phase will focus on creating logic to filter and display rocket results based on availability date,
name of captain, and/or rocket type.  A favoriting option will be added to the rocket view, and this data will
persist to the database.  If time allows, I will also implement search based on key words in the
rocket description.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 Day)

If a reservation idles for a period of time without being accepted or rejected, the user receiving the
reservation should be reminded that the reservation is pending.  If a reservation has been idling for a longer
period, it should be deleted automatically and garbage collected.  By the end of this phase, both these features
will be implemented.

[Details][phase-five]

### Phase 6: Styling and Seeding (1 Day)

During this phase, I will finish styling with Bootstrap and CSS.

### Extras

If time allows, I will implement the following features:

- [ ] Non-standard time and date formats (e.g., stardate, galactic standard calendar, etc.)
- [ ] User messaging
- [ ] Allow users to post reviews of rockets
- [ ] Intergalactically appropriate transitions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
