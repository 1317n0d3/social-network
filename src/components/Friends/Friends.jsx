import React from "react";

const Friends = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        userId: 1,
        name: "Vasya",
        followed: true,
        avatarUrl:
          "https://www.google.com/search?q=avatar+for+discord&newwindow=1&tbm=isch&source=iu&ictx=1&fir=ftvWsim-MQWx0M%252CdmlLWbOj_qFxMM%252C_%253Bqm3h3k79YaFl7M%252CrzI0GHOZ-pMTIM%252C_%253BP7AJn9Y_yssr2M%252CEOrhIF3PKYaEgM%252C_%253BGIUFx4YazBtWQM%252CSd_s3rvtEdoONM%252C_%253BfHF8GVigwJOZWM%252Cg4tOLgB0p5prSM%252C_%253B-7kMQQ8-SbSwcM%252CQv1kyeod6d8k9M%252C_%253BRSKniM8rj7ejNM%252COfFcSSyTZsEu6M%252C_%253BNCxGodQBW8L8TM%252CI1vn8zUJsSNBgM%252C_%253BVqxBk57OGQCR8M%252CwOGF-f4cuNIC1M%252C_%253BV5IYlKLlpzxL3M%252C95KyK2mxTjFjOM%252C_%253B5Eo6pPTTceha1M%252C_tgpv5NXvP75zM%252C_%253BPqQ6zadYSQHrMM%252CGdOdnwP4APaGQM%252C_%253BStJhGMLB2aUxrM%252Cb582GHgmjeitSM%252C_%253BjlFoUHuoVQ3JpM%252CfiCrYPC5nCm40M%252C_&vet=1&usg=AI4_-kTnLQV4jhkr6Sr-Kh4LmYayakci0w&sa=X&ved=2ahUKEwiZ3YPvvsnzAhVdAhAIHQABASUQ9QF6BAgfEAE&cshid=1634200429083214#imgrc=qm3h3k79YaFl7M",
        location: { country: "Russia", city: "Moscow" },
        bio: "I am a new user :)",
      },
      {
        userId: 2,
        name: "Petya",
        followed: false,
        avatarUrl:
          "https://www.google.com/search?q=avatar+for+discord&newwindow=1&tbm=isch&source=iu&ictx=1&fir=ftvWsim-MQWx0M%252CdmlLWbOj_qFxMM%252C_%253Bqm3h3k79YaFl7M%252CrzI0GHOZ-pMTIM%252C_%253BP7AJn9Y_yssr2M%252CEOrhIF3PKYaEgM%252C_%253BGIUFx4YazBtWQM%252CSd_s3rvtEdoONM%252C_%253BfHF8GVigwJOZWM%252Cg4tOLgB0p5prSM%252C_%253B-7kMQQ8-SbSwcM%252CQv1kyeod6d8k9M%252C_%253BRSKniM8rj7ejNM%252COfFcSSyTZsEu6M%252C_%253BNCxGodQBW8L8TM%252CI1vn8zUJsSNBgM%252C_%253BVqxBk57OGQCR8M%252CwOGF-f4cuNIC1M%252C_%253BV5IYlKLlpzxL3M%252C95KyK2mxTjFjOM%252C_%253B5Eo6pPTTceha1M%252C_tgpv5NXvP75zM%252C_%253BPqQ6zadYSQHrMM%252CGdOdnwP4APaGQM%252C_%253BStJhGMLB2aUxrM%252Cb582GHgmjeitSM%252C_%253BjlFoUHuoVQ3JpM%252CfiCrYPC5nCm40M%252C_&vet=1&usg=AI4_-kTnLQV4jhkr6Sr-Kh4LmYayakci0w&sa=X&ved=2ahUKEwiZ3YPvvsnzAhVdAhAIHQABASUQ9QF6BAgfEAE&cshid=1634200429083214#imgrc=qm3h3k79YaFl7M",
        location: { country: "Russia", city: "Moscow" },
        bio: "I am a new user :)",
      },
      {
        userId: 3,
        name: "Vanya",
        followed: true,
        avatarUrl:
          "https://www.google.com/search?q=avatar+for+discord&newwindow=1&tbm=isch&source=iu&ictx=1&fir=ftvWsim-MQWx0M%252CdmlLWbOj_qFxMM%252C_%253Bqm3h3k79YaFl7M%252CrzI0GHOZ-pMTIM%252C_%253BP7AJn9Y_yssr2M%252CEOrhIF3PKYaEgM%252C_%253BGIUFx4YazBtWQM%252CSd_s3rvtEdoONM%252C_%253BfHF8GVigwJOZWM%252Cg4tOLgB0p5prSM%252C_%253B-7kMQQ8-SbSwcM%252CQv1kyeod6d8k9M%252C_%253BRSKniM8rj7ejNM%252COfFcSSyTZsEu6M%252C_%253BNCxGodQBW8L8TM%252CI1vn8zUJsSNBgM%252C_%253BVqxBk57OGQCR8M%252CwOGF-f4cuNIC1M%252C_%253BV5IYlKLlpzxL3M%252C95KyK2mxTjFjOM%252C_%253B5Eo6pPTTceha1M%252C_tgpv5NXvP75zM%252C_%253BPqQ6zadYSQHrMM%252CGdOdnwP4APaGQM%252C_%253BStJhGMLB2aUxrM%252Cb582GHgmjeitSM%252C_%253BjlFoUHuoVQ3JpM%252CfiCrYPC5nCm40M%252C_&vet=1&usg=AI4_-kTnLQV4jhkr6Sr-Kh4LmYayakci0w&sa=X&ved=2ahUKEwiZ3YPvvsnzAhVdAhAIHQABASUQ9QF6BAgfEAE&cshid=1634200429083214#imgrc=qm3h3k79YaFl7M",
        location: { country: "Russia", city: "Moscow" },
        bio: "I am a new user :)",
      },
    ]);
  }

  return (
    <main>
      {props.users.map((u) => {
        return (
          <div key={u.userId}>
            <span>{u.name}</span>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.userId)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.userId)}>Follow</button>
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Friends;
