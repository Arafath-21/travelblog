const handleCreateBlog = async (formData) => {
    try {
      const res = await axios.post(API_URL, formData);
      if (res.status === 201) {
        alert('Blog Created Successfully');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };