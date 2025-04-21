## Requirements

# Medium complexity

- Hosted
- Account/login
- Account has rss feeds, saved stories in a database, what's the best database solution? How much does the hosting influence this
- User selected topics, manually attribute a story to a topic, have a view of stories within that topic, story linked to one topic
- Refresh feeds, dump cache, make call to get feed data again? Would feeds need to be an API so a new GET request can be made?

# High complexity

- Event driven RSS feed updates, how do we make this real time? Can this be in the Next.js app, or is this it's own service?
