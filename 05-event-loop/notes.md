What is the Event Loop?
    The Event Loop allows Node.js to perform non-blocking asynchronous operations.

It continuously checks:
    Timers
    Pending callbacks
    Poll queue
    Check phase
    Close callbacks


How to Exit the Event Loop -
    Node.js exits automatically when:
        No timers exist
        No server is running
        No pending callbacks remain

you can also exit manually using process.exit() or process.exit(0)