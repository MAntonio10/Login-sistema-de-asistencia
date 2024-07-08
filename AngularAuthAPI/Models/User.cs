using System.ComponentModel.DataAnnotations;

namespace AngularAuthAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string? Firstname { get; set; }
        public string? Secondname { get; set; }
        public string? Lastname { get; set; }
        public string? Secondlastname { get; set; }
        public string? Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        
        //Atibuitos futuros a implementar
        //public string Rol { get; set; }
        //public int Token { get; set; }



    }
}
