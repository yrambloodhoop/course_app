import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const logoUrl = "data:image/png;base64,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"; // Replace with your logo URL
const profileIconUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEUAAAD////u7u7t7e3s7Oz09PT5+fn8/Pzx8fHp6enm5ubi4uJzc3PNzc3Y2Nhubm6vr6+Li4u+vr4mJibFxcV/f39WVladnZ1RUVEwMDBcXFxmZmY4ODikpKRHR0dhYWFAQEASEhKVlZUcHBwiC0EqAAAUkUlEQVR4nO1di5arKhJtQB7RaNRoJ+k8Okn//z+OL6QK8Z10n1nr1sxatzkYZQsUm6Kq/KClMCVJKVKxqkxqcdV5TZ1y1DFdV5WU0KWiyFh9JeH1EyS4UtfJpk7AOl2q6zz9Owqv1HUfvBZRy79UErOv/NCd4JWiNPCq1HZCVdAvk9V1ukscdbrE4ZX6LmLgCcL1O+6Vd2X4d+gJbV0DRqJR0/Qi03X1qMF1eFw2t6s7X6FRw1wjQ49Z96ipCh4aQ1Pq/l/BSFfdb4KBV/7TYKQTTD1FSXObeqJi1TgfDPqdG0wxsVjxP6MAGJqeDE9yBhUArKNIAagoTK+HZ5JvC8nz5HCNw4g3zahm7oACYKbBZcuM4ihKDCoHBhQAUnVY9TV/OtUirqv+Es0/lg+J4uTrcjnt9z+Px0cjj8fPz/50uXzlcaiKi5pb9Wpajv+uL3TV6XuID1aJWfxKaRfNsuAp0wllUb/M7u/qcbmJt/uPUfnZxX49ospfmhddigBPN4tm/XQJn47qykUTD/OhKTDCABRXjKfbcRxGzvGGUq4oZgcMTZ1ZDOAlYEgBJAgPxzlIark/w6Cdqi7F9Qdg/PC6AEktx0O26e8Z9dtgonj7sxRKKY9tHL1kmFUzSWvTZpJrBcAGFAD1mt+JRcPLltsz45YCaNqClIMhei7l8CFWCeFpfl8PpZRLHlMC7837Htqp0yXEAKxVXneQs64qyXR3Gmnj43I/fhZyvF/GhuL+HAszvloVh0cUHRiJy+lMUQw/B1aU+/YZZ1EUBPXYYX4QRFEWH/KBQbk/pmYKLKYzS7iZ+nz0tOmSpL4QUqhKdP9Wwot/FpssufR15M0nYggMfQMYLnN3a0552tAv4toCaE1LeNgHaMv4r4JRKnb0SjE9DpGUfMJ+pmhU0UfB9eacSFem1g0zhsDgJaW2LGjWXDwp3DnG1tehGCHKaFPXfoZRqHcVJ5vr9717r6+QKsCMoV3D64BhNmueY2cQ3rU7QI5JJuodzDwbRLlOJV+dbj4d/AVWDtei6bWLptdZNItNTtSdLbtrxDkF25PqLmjxQ8ud2fIUr50XG4a8A2cbimrnwqyF0fWEdtGkcBEZpzNKxB3VmqcbycEk69jN0LKB7Wb1EwhNO2/oduCKvpObMe7l9ozdZqxt8EIwZZ3KOnC2fnHx28AwEZ2tB35m1PxuDZji7/DbuvlXKOdZNEfBgA2YTG/4aT+xgr9bB6YoxRajuMRyds8ABVDrz6ZRjCEwwn7W2edA78ItdXVPDIaABzOjAKrHt+acjTXWHgfRamhwZfU7hvR1pQDGtWlTkPyJH7QPDcntuYuUsqQvlbVBVMUR7S1IYDHXhMtRDe22NZsX1rEE0w3Gst/W3TVka1abIIqT3bHWu5fvJI4C1fsE3ZUJ7v88UF0bddtdi2zNyscD4JaCcem2aIooTaw5VlG3ynQ2NAUyrPy3QXnxC1kzDxCWxy4CQJ1geHjoIKnl8iw0oBgAI6McdU6F5nVEk2+QCakkG1j9dcCkydCurVhm+YByUhtMmApF8zowykNYLilVA4ZzpkiUjNgBH9tUqX5Nq1R6h5fvCqY2Z5hB20VjMNTTk2Mst1AZbdqYFvXCVBY46xtg6I0kxeDptU9QFaGJs9047RqWBcRizdylMQmaL5+bqt6plMu/SLDt24HizjmGxP282gRN0TYjdypzDps9xdZMBdLJnwR2HrY1V10ZoQEyCCdr7mLYAewgicZDzhW4sn6eGZfV08U4nRFX1N9629t32pxNhVJKTBCdsYyAMoHXPvk0OjMEhqdwLueCDYNJ52Ap1nehOmCM4kJj4hHztWB4CCbzIy92swNg6FwsJVtRvT1DlXqC6XfJ+DowKgDT8JFvFB3oGSbCuVg+HtcBMMUK8ATbp69ITbE1sx5bM1Vw2BYsCdiasS4vf8ejBebzfcz7NG2pYPwE9M0WK4CurblRbc25msAqUsTgsTtf8vY8zj6rK//vf83H8vFxDyXW87otlUi0KbgK1FB7WRm2NfuAkxyDprvgSJTQ8px0GjpJtsx9etGU4Ct6RHKAAQzZmovRBiZ/sXuBQB1H5+mYDb1HHrHb0NeUBNzh3CXtB6MGeoaRA3hkKuQAmOJ21GEYnCb3qDbtucFwDtVKTthEMLhn0Hx+yjEPjWunkZPlQPEwowgMgzP3kZWbhwVg7uYen8Rm1DaYYNHsbyRUQ2AYAcTmQtUCMAIsWD8lX9dbY/ecWdExxdKJ54yHwVAF32si+sFA9aaAshORmf2PUHQUIS5Jf/GMqSQonm3uqarGCNgYw6numbSerq/kvYsmZHkHaerwotnaLmbzGCxx0yVw0eSgZRJMm1z0LpoUqjGgaTOzcT1TUOf2A/AWrjFa7tKMGueBpTLTZp/O5WbKLLynkIyCCe7rwHz4fWC0RTM0L3e3mQkmNWo54eNg5jNMS+LufLZogdkOFKvsHDBkY+bzEVuVEJj2d6t0WfUUYo7aXD0jRWTM6l++23vjw4Peb9oXDr5pbe2VLiNkA4av02Wl1BMZGiixkZXz2AyWlFcufNDbrvgHt61ZMPMWdlQIVCkdGpr2nYRPF0+axzutHIIbHXDbWPTeZWvWU8Bs5Pcxsfyava5fswpWY/mIea9fs7ZDAx2QwrphW7MAHSMnOJzyWVYMtxzEuMOp6Zojt+t6wEhiXvQ+m+I9u3bJLCWXtj25CyYym4FwIhgCjH5nMgWMil3Nmye7CWBA13xNBaPMI8JpYA6O1s2Us5zg1wzm5qYfTOMLVzfYLBrH+iLkxVY7tQK/ZsZeAeZbdo71YampM+fDiakzCkDrP2O2JYahprXXOB8RsXrNLAe08VlG94b/lWb9e0jR+YHNAEqzn3mCsOooxXYzvT6/QAHsSgaA1nUKSw07EEA7c4sBMIetGdirn8Kqs+mM1hgvUM05cRNN3GCwgz6Sjo9AF4wyo6w+3uoJxYJgovVg4s58doFhsv3BPuCjYAAF2ikbaF/PbNaDCXt6Rllg2o3T4ypGwUjDGbPJYLyFJjMgdNIw86QZBN/C9t6wD5uo327994ziOo/a22Zdx2eFADiluk3vttnoa9q27x5wS5fbrFkau2SuMG118Wttd16tm2+k5wn203m7pu1jadW1wUDaqG828ymFdcDlEVlAqhJfvdM8iI59AndQe6xuNGfSWTSJHl/NFGinzClSum6MzlC+2gYQ8c70cNCZEow5Mz1zMczNgk996Tagk8Eo20lortxVRyf3uQL77di5hcNggCn/oKaDWXD+h+UwHYyh6D+xHAZjKGOxz54ORvq2i+A8CSaDYTxrV/VE0iEwot3KfEaqDwxzgCGrtjTJ0JGGBUYZM83WUxhM6dAmWz0YtBfmm4Kk1pV1nRJ1UetB+LuiFK05BYiEuad+QvM8gZ5X1plz1mMoTGVR9+Eha0V21xdeieULJykyNdmR3fwwycnEKQkM3rRiso1fc2vlaAfBKcV1mM4Q4+JfEj+b6nToDKhTy7vmok8YJ8acGTeLGNdZYNqV/B5OAQP9ADruqFPlcW0pywRuVvxpHJ4OQ2BEOxy/gx4w/U4NqicIZUzOwczQRuMxlvABMKxtT67m9gzl/n0JlnvGZwadmm3AzsdgEGsO2tWishcw6IUhaTcasCVsZcnjS/ZoAx4aKAQCWjlauvEZoTrEmtFo7BBXzGldpFYu4JsFW5ybUcOs7KfGtRqz5tpkZBbXx4F7dgSJtjV3TU1tnZi9dObwCW7WbMeveDzWnOuRcsZ6bM081Zr5VDp3LcjUIK7zVpsc3nMaNyub2dpoYkiDMBjD4e7pMjCUz1HQPzmB95wMJmt3m5PA3MKFYBTHTrxDcrlydM+pYFTU7lOuU8AUNHMZmNKIuJs21L6K3l8GxniDPCuq2QHjla5XrZr4ioCfHJ7kDlszskMX205HgF1H9kkEvBSdcdewBOuoocOJT5nbr1mY/eK33/XJcPogu+qECEfdAnahkqLnLu54ElMSqt3bJwy2EzEAA+as9KiZZGtGPnRFifvZ4GbtM21ug3xC7cRTcOxJFL1t+IwyI9GyNRswO9GC6cuixVAdBsqU2kTdcEXd7aEHI6IGHE7hZIEugC3rgmAsbuYEM5mb4ZgzpTjPHLuC29Uv9lfumLPJaScwhVwOZsRJG7zvqi6It7efn58y58zPZVdml6jcsofA0N8DMz9ZGxHcjwIf1ZlIrtcPM9ZRANVGgbJug51zpo7/o4rwqtFWTHbp/cZ1WgAUDUgjX3GTea7+ndkogysxGGtDo6O3EWsGYIDDxNSccUIE2fN+zBiZljOO8DD/yNOo9ZKb/Dzj3ZJQWAdtzXDRhM7lOODHsjW3i6aM4uqFPbY6uwGHyyv2d5Oce1lSnQR9HUIpFFoY2YCtuXie6l00SdOoapS3JoC5dIbIMGn3Qqc85oQMJzdQad7ShHueKtGZ+f3JDcbpTNXeZUSTcRHihC378zMoJj7tgGnecHDdIcZzOseiE/E3iWiiF/SCLYCS0a5Dxh638yHiJWOBmRpUeTy0ic+3TgTE6TuTfCIYHraDIOa9YMDmbDoYIXpC/x77y+4a6sg3UuZ2YVGc307uWI79Tmvv8c1ZOwx6wFTDBWybBWXuHBqKQVszl+nYbux0zvMkSfLz2MHnj2XTAyUYk83QthksTNivWZgwpqecoiOlDNb7AAL5iogc19DQoIHy4GFbs21qgvZky62Reh5Tm3i9CyCWgrlhW7Mrw2jX1OSyNQMjYKlcUV2XzvBopTezS3aRZtS93KzfCIgaPME824JRPLPTRLxETikCs9w8awzntzHDORfX9Z4MbrmqYTATDeczjjToG4aYliQYHGb9Rxo1D2oPm9oJXR82QVszCmzgC03+0+QcEW3lcCTRaZf2fYrrsIeGBMeA1DYlQGvvZr1/yaAcI2LpZPN0w+2PEXKyNrbm+jAAHdB6uK7pPFYsUtFbpj6UU2jIDWTNCh3Q+qjOjgY0Knzg6JxHL8hoOCqZ1jSLj85JyxQKQtoDhq86WJ4ukRuMYcOP64hTg3npfe4mv4Xl4yNwgZnhbiLlqCPQyuiyGXIKHGCUiYXrdQRqfeGAi1abmhCd+L1VJ2M5VomDka1ZARetvC+HhtZuBDrPdXWyICvdl+bJ1pM2a1bAec6ynHRcgRV0a7QcF4q/14VjzpZHwrQ1uyE30K0xwltTNuhwGtqGPiaWBmMvRnMVmM4Ar+Mv3nE4tcEAV+Btx6XEuNb9lmj3GIcr8GHcFZgq8/I31hB8gZPsbPkOMJi2YoqTNgXjzHKf5y8IxpgvTwEaPMV9Hs4LGHMlYJ0IJ2QteoNkEIzZpseikynUEQ0IQ05Aqgrp/cEgK+VWJeVtLC7tvz6quHKYlU6ZaEDAjDvBQNWq5Uw3+yuScEcwUE7aBXUwGtAZpqV+hSq7JdSmWxCmBYKhhwPozHgyAXTsV5d+LLeieQI37EimgjELUxvauChBzsskFstDG4Uh+TtSm2f/YokxclLVYm847n046BQxY+M/XqzApSlzkV/cCyUh3B0OjBWA9l3WGcgr2YCuUbKoI383+yu5eIV6NoPjviGg1apxwLZszTrHJ4iIexxKc6n/FwiAPJ6EX60Q+u4Xq8aTG1TG6XWe/i+Qo2esYB+fQU9yAzcYkpoVsiBHLwiRXyk/B7CTmpd2QhJqBugp/M2tcp+cDDHc+XMzz2VGp++CV5/CrJKBVC3MdaxfrjWgNz7/csHsyJaT4cxz3TM3Gf0N4R+VS0b6Tgqt/GbAF04kf8WShyUXwFcI29R6vthQXgJTV/07ctlw6yR6Un4zEf5TU6WWR7osWRv7XYPfNNkuTKNHFbn/ddttudTedlPyNVshvx4JFgYrvUseoRzweR75yol8QQ6WV8rBysRvhYt3c2iYEmFqaejVe2Rr/DUgA5CTE+n+OV82chxNpDsMBqc4/ls5rU1xXAbE/CurzRUk0FwIRok/sTB3pUq6vQQMMWBKkvbXOErJy7ykU7+o3Y2KllI1hX9ApW2VqO3J3Wjx8mNkiDXbcdf1V3OJBv6nRrNSzoFuy+qvnPDfOy7vw2KdBs7nZuDDICsTMayUr+4h2QowlAd/ONLOUceBexUYZn2A5jdlF3TTuIyxZgSmKqHvSSn/jzR0HijrW1MATBWV0vHQwKmMnBx6bW6ZZZJQzIydLdOsmcGNjPWVE6tubuDyK+Sp4NbFc8avzPg2IIj4k9NDfV8jpwUfbRsEAz+nJztfvHurfKayZ+a/AAwtv0T1e0NtG5SWmLeBKcMvr7+0wbk/adXIOWD6bM2tArD8mhkJf2X93IWiStMx8EXt7sdBnRYCV8F8aXVzeLuj1v4Z9GSec+pkt60Z2TWoq640DNB364FjRjm2XShEZ3q+tj1ga8auwKhOsbd6BB42xU5s+qeOZ3/o0I454+JtM+eLVp5hv/hF7aKj/fsbtPTjFBFRRbX9LhhC0uOLLTc/t9g0eAUYqIWtbwM6vv/X6EgRf7/QGv3zFYu6iciejGkYrhv8NuDcEqFx/iI9vd9eN2RmW6yVxF40h1izo7uKOp4+7+uhXJ6pIqLzabC+LpnDmpsGUziRBjI1hPFKE8E5DkV3Cjgpy1DdXG7W95WTbHn3XJLUh42akKnhvWC48oIwWeD7sE+ywENZHP4cTOXczannX2e5pB+vkVfw8PnZTRbbmvtyaOA62s6n4Po9YTF9fF6jtsEDYNw5NFBygUoBlPaXljWj/J9WSTjqbGuvqSvv7meH7f1y2u9/HgBYma9lf7pcds+ssrbWOT67d5ldGv7KCc7/OfqVk54vavthGh+SPM+3hRT/SQ5xHOo4T9cTLF84WBqqW000Bz51bKLTmqDORuo1rn/UTE4J1lf3TjB2QhB4pZ6AS8G8gWjOAwMb/B+YsTrs14y/wtqTeY5BkuTIPGeIXsNpnXRKeeNUSzd4oO6lrPmdpSHrsvvKmjVTzIzRF7UtRm0yZXV/hyO7TWx1WfDasQe7cuiL2k2dgL8z49LBqMX/AM/CjZqWPm8EAAAAAElFTkSuQmCC";

const NavBar = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
      <Link
          to="/courses"
          style={styles.menuItem}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
          src={logoUrl}
          alt="Logo"
        
          style={{
            ...styles.logo,
            ...(isHovering ? styles.profileIconHover : {})
          }}
          
        />
        </Link>
        
      </div>
      <div style={styles.menuContainer}>
        <Link
          to="/courses"
          style={styles.menuItem}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Courses
        </Link>
        <Link
          to="/dashboard"
          style={styles.menuItem}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={profileIconUrl}
            alt="Profile"
            style={{
              ...styles.profileIcon,
              ...(isHovering ? styles.profileIconHover : {})
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#343a40',
    borderBottom: '2px solid #007bff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, border-bottom 0.3s',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    maxHeight: '50px',
   border: '2px solid #ffffff',
    transition: 'border-color 0.3s, transform 0.3s',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menuItem: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    position: 'relative',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#007bff',
    }
  },
  profileIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #ffffff',
    transition: 'border-color 0.3s, transform 0.3s',
  },
  profileIconHover: {
    borderColor: '#007bff',
    transform: 'scale(1.1)',
  },
};

export default NavBar;
