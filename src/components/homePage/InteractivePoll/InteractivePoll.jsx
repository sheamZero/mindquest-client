import { CheckSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { FaChartPie } from 'react-icons/fa';

const options = [
  { id: 1, text: "Tech & AI Trends" },
  { id: 2, text: "Health & Wellness" },
  { id: 3, text: "Travel & Culture" },
  { id: 4, text: "Freelancing & Career" },
];

const InteractivePoll = () => {
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (selected) {
      setVoted(true);
    }
  };

  return (
    <section className="bg-card py-10 px-5 md:px-10 rounded-xl w-full mx-auto mt-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <FaChartPie className="text-accent text-3xl" />
        <h2 className="text-2xl  md:text-3xl font-bold text-heading">
          Interactive Poll: What Should We Cover Next?
        </h2>
      </div>

      <p className="text-paragraph text-sm md:text-base text-center mb-6">
        Help us shape our next blog post! Choose a topic you're most excited to read about. Your feedback boosts engagement and ensures we create <br /> content that matters to you.
      </p>

      {!voted ? (
        <div className="space-y-4">
          {options.map((option) => (
            <label
              key={option.id}
              className={`block max-w-3xl mx-auto p-3 border rounded-lg cursor-pointer transition hover:border-accent ${selected === option.id ? 'border-accent bg-accent/10' : 'border-paragraph'
                }`}
            >
              <input
                type="radio"
                name="poll"
                value={option.id}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="mr-2"
              />
              {option.text}
            </label>
          ))}

          <div className='flex items-center justify-center'>
            <button
              onClick={handleVote}
              className="mt-4 bg-accent text-white px-5 py-2 rounded-full hover:shadow hover:brightness-95 transition"
            >
              Submit Vote
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-2"><CheckSquareOutlined className='text-2xl' /> Thanks for voting!</h3>
          <p className="text-sm text-paragraph">
            We'll share the poll results in our upcoming blog. Stay tuned!
          </p>
        </div>
      )}
    </section>
  );
};

export default InteractivePoll;
