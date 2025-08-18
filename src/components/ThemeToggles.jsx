import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={theme === "dark"}
      />

      {/* sun icon */}
      <svg
        className="swap-off"
        height="20px"
        width="20px"
        version="1.1"
        id="sun"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1010 1010"
        enable-background="new 0 0 1010 1010"
        xml:space="preserve"
      >
        <g id="sun-sun">
          <g id="sun-fill">
            <path
              fill="#FFCA72"
              d="M826.1182,505c0,177.335-143.7831,321.1006-321.084,321.1006
			C327.7417,826.1006,183.916,682.335,183.916,505c0-177.3184,143.8257-321.1182,321.1182-321.1182
			C682.335,183.8818,826.1182,327.6816,826.1182,505z"
            />
          </g>
          <g id="sun-line">
            <g>
              <path
                fill="#37474F"
                d="M505.0342,833.0557c-180.9146,0-328.0899-147.1671-328.0899-328.0557
				c0-180.9233,147.1753-328.0903,328.0899-328.0903c180.8896,0,328.039,147.167,328.039,328.0903
				C833.0732,685.8887,685.9238,833.0557,505.0342,833.0557L505.0342,833.0557z M505.0342,212.9785
				c-161.0181,0-292.0215,131.0117-292.0215,292.0215c0,160.9922,131.0034,291.9873,292.0215,291.9873
				c160.9931,0,291.9697-130.9951,291.9697-291.9873C797.0039,343.9902,666.0273,212.9785,505.0342,212.9785L505.0342,212.9785z"
              />
            </g>
            <g>
              <g>
                <polygon
                  fill="#37474F"
                  points="1010,523.043 914.5986,523.043 914.5986,486.957 1010,486.957 1010,523.043 				"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="95.3936,523.043 0,523.043 0,486.957 95.3936,486.957 95.3936,523.043 				"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="524.999,95.3506 488.9385,95.3506 488.9385,0 524.999,0 524.999,95.3506 				"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="204.9355,244.8813 138.1455,178.0322 163.6709,152.5234 230.4609,219.373 204.9355,244.8813 
									"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="805.1162,244.8813 779.6074,219.373 846.3711,152.5234 871.8809,178.0322 805.1162,244.8813 
									"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="524.999,1010 488.9385,1010 488.9385,914.6152 524.999,914.6152 524.999,1010 				"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="163.6709,857.459 138.1455,831.9512 204.9355,765.1016 230.4609,790.6094 163.6709,857.459 				
					"
                />
              </g>
              <g>
                <polygon
                  fill="#37474F"
                  points="846.3711,857.459 779.6074,790.6094 805.1162,765.1016 871.8809,831.9512 846.3711,857.459 				
					"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on"
        fill="#F1EB75"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;
