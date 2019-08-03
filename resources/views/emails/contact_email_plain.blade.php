@component('mail::message')

A new contact request have been received.

@component('mail::table')
| Input         | Details       |
| ------------- |---------------|
| Name          | {{ $name }}   |
| Email         | {{ $email }}  |
| Message       | {{ $message }}|
@endcomponent


Thanks,
{{ config('app.name') }}
@endcomponent