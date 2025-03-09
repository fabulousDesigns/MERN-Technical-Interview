/**
 * Assignment 4: Complex Nested Destructuring & Data Transformation
Task: API Response Transformer
Objective: Create a function called parseApiResponse that transforms a complex nested API response into a simplified format for your application.
javascriptCopy// Example API response:
const apiResponse = {
  status: "success",
  timestamp: "2023-05-15T14:32:21Z",
  requestId: "req-123456",
  data: {
    users: [
      {
        id: "u-1",
        profile: {
          name: { title: "Mr", first: "John", last: "Doe" },
          email: "john.doe@example.com",
          address: {
            street: "123 Main St",
            city: "Boston",
            state: "MA",
            zip: "02101"
          }
        },
        stats: {
          joined: "2020-01-15",
          lastActive: "2023-05-14",
          posts: 42,
          followers: 125
        },
        settings: {
          notifications: true,
          privacy: "friends",
          theme: "dark"
        }
      },
      // Additional users would be here...
    ],
    meta: {
      totalCount: 1,
      pages: 1,
      nextCursor: null
    }
  }
};

function parseApiResponse(response) {
  // Your code here
  // Use destructuring to extract and transform the data
}
Requirements:

Use nested object and array destructuring
Rename at least three variables during destructuring
Use default values for potentially missing properties
Extract the first user's information (assume there's always at least one user)
Create computed properties based on the extracted data

Output Format:
The function should return an object with the following structure:
javascriptCopy{
  requestInfo: {
    id: "req-123456",
    time: "2023-05-15T14:32:21Z"
  },
  user: {
    fullName: "John Doe",
    contact: "john.doe@example.com",
    location: "Boston, MA 02101",
    accountAge: "3 years", // Calculated from joined date (approximate)
    engagement: "medium", // Logic: low (<30 posts), medium (30-100), high (>100)
    preferences: {
      darkMode: true, // Based on theme
      notificationsEnabled: true
    }
  },
  pagination: {
    total: 1,
    hasMorePages: false
  }
}
Hints:

You'll need to calculate the account age based on the joined date
The engagement level should be determined by the number of posts
Consider what happens if certain properties are missing
 */

// Example API response:
const apiResponse = {
  status: "success",
  timestamp: "2023-05-15T14:32:21Z",
  requestId: "req-123456",
  data: {
    users: [
      {
        id: "u-1",
        profile: {
          name: { title: "Mr", first: "John", last: "Doe" },
          email: "john.doe@example.com",
          address: {
            street: "123 Main St",
            city: "Boston",
            state: "MA",
            zip: "02101",
          },
        },
        stats: {
          joined: "2020-01-15",
          lastActive: "2023-05-14",
          posts: 42,
          followers: 125,
        },
        settings: {
          notifications: true,
          privacy: "friends",
          theme: "dark",
        },
      },
      // Additional users would be here...
    ],
    meta: {
      totalCount: 1,
      pages: 1,
      nextCursor: null,
    },
  },
};

function parseApiResponse(response) {
  const {
    requestId,
    timestamp,
    data: {
      users: [
        {
          profile: {
            name: { first, last },
            email,
            address: { city, state, zip },
          },
          stats: { joined, lastActive, posts, followers },
          settings: { notifications, privacy, theme },
        },
      ],
      meta: { totalCount, pages, nextCursor },
    },
  } = response;

  const formattedResponse = {
    requestInfo: {
      requestId,
      timestamp,
    },
    user: {
      fullName: `${first} ${last}`,
      contact: `${email}`,
      location: `${city}, ${state} ${zip}`,
      accountAge: formatRelativeDate(joined),
      engagement: engagementCountHelper(posts),
      preferences: {
        darkMode: theme,
        notificationEnabled: notifications,
      },
    },
    pagination: {
      total: totalCount,
      hasMorePages: true ? pages > 1 : false,
    },
  };

  return formattedResponse;
}

function formatRelativeDate(dateString) {
  const givenDate = new Date(dateString);
  const today = new Date();

  const diffInMilliseconds = today - givenDate;
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""}`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
  } else if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""}`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} `;
  } else {
    return `Just now`;
  }
}

function engagementCountHelper(posts) {
  if (posts < 30) {
    return "LOW";
  } else if (posts >= 30 && posts <= 100) {
    return "MEDIUM";
  } else {
    return "HIGH";
  }
}

console.log(parseApiResponse(apiResponse));
