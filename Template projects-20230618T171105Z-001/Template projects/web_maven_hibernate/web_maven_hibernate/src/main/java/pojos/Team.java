package pojos;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
//id , name, abbrevation,owner,max_age,batting_avg,wickets_taken
@Entity
@Table(name="Teams")
public class Team extends BaseEntity{
	@Column(length = 100,unique = true)
	private String name;
	@Column(length = 10,unique = true)
	private String abbrevation;
	@Column(length = 50)
	private String owner;
	@Column(name="Max_Age")
	private int maxAge;// max age of the player allowed in this team
	@Column(name="Batting_avg")
	private double battingAvg;
	private int wicketsTaken;
	@OneToMany(mappedBy = "teamDet",cascade = CascadeType.ALL)
	private List<Player> player = new ArrayList<>();
	
	
	
	public List<Player> getPlayer() {
		return player;
	}
	
	

	public Team(Long id, String abbrevation) {
		super();
		this.setId(id);
		this.abbrevation = abbrevation;
	}



	public void setPlayer(List<Player> player) {
		this.player = player;
	}

	public Team() {
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAbbrevation() {
		return abbrevation;
	}

	public void setAbbrevation(String abbrevation) {
		this.abbrevation = abbrevation;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public int getMaxAge() {
		return maxAge;
	}

	public void setMaxAge(int maxAge) {
		this.maxAge = maxAge;
	}

	public double getBattingAvg() {
		return battingAvg;
	}

	public void setBattingAvg(double battingAvg) {
		this.battingAvg = battingAvg;
	}

	public int getWicketsTaken() {
		return wicketsTaken;
	}

	public void setWicketsTaken(int wicketsTaken) {
		this.wicketsTaken = wicketsTaken;
	}

	@Override
	public String toString() {
		return "Team [ID ="+getId()+", Name=" + name + ", Abbrevation=" + abbrevation + ", Owner=" + owner
				+ ", MaxAge=" + maxAge + ", BattingAvg=" + battingAvg + ", WicketsTaken=" + wicketsTaken + "]";
	}
	public void addPlayer(Player p) {
		player.add(p);
		p.setTeamDet(this);
	}
	public void removePlayer(Player p) {
		player.remove(p);
		p.setTeamDet(null);
	}
	

}
